<?php
$root = 'C:\\xampp\\htdocs\\Quizzer_Project';

$dirs = ['css', 'js', 'images', 'includes', 'auth'];
foreach ($dirs as $d) {
    if (!is_dir("$root/$d")) {
        mkdir("$root/$d", 0777, true);
    }
}

$moves = [
    'style.css' => 'css/style.css',
    'script.js' => 'js/script.js',
    'quiz-data.js' => 'js/quiz-data.js',
    'db.php' => 'includes/db.php',
    'auth_check.php' => 'auth/auth_check.php',
    'login.php' => 'auth/login.php',
    'register.php' => 'auth/register.php',
    'logout.php' => 'auth/logout.php',
    'contact.php' => 'includes/submit_contact.php',
    'view_contacts.php' => 'includes/view_contacts.php',
    'index.php' => 'index.php',
    'dashboard.php' => 'dashboard.php',
    'contact.php' => 'contact.php',
    'restructure.py' => 'restructure.txt' // Move out of the way
];

foreach ($moves as $src => $dest) {
    $s = "$root/$src";
    $d = "$root/$dest";
    if (file_exists($s)) {
        rename($s, $d);
    }
}

// Rename assets
if (is_dir("$root/assets")) {
    $files = scandir("$root/assets");
    foreach ($files as $f) {
        if ($f != '.' && $f != '..') {
            rename("$root/images/$f", "$root/images/$f");
        }
    }
    rmdir("$root/assets");
}

$replacements = [
    'href="css/style.css"' => 'href="css/style.css"',
    'css/style.css?v=2' => 'css/css/style.css?v=2',
    'src="js/script.js"' => 'src="js/script.js"',
    'src="js/quiz-data.js"' => 'src="js/quiz-data.js"',
    'images/' => 'images/',
    'index.php' => 'index.php',
    'dashboard.php' => 'dashboard.php',
    'contact.php' => 'contact.php',
    "fetch('auth/login.php')" => "fetch('auth/login.php')",
    "fetch('auth/register.php')" => "fetch('auth/register.php')",
    "fetch('auth/logout.php')" => "fetch('auth/logout.php')",
    "fetch('auth/auth_check.php')" => "fetch('auth/auth_check.php')",
    "fetch('includes/submit_contact.php')" => "fetch('includes/submit_contact.php')"
];

function process_dir($dir, $replacements) {
    global $root;
    $files = scandir($dir);
    foreach ($files as $f) {
        if ($f == '.' || $f == '..') continue;
        $path = "$dir/$f";
        if (is_dir($path)) {
            process_dir($path, $replacements);
        } else {
            $ext = pathinfo($path, PATHINFO_EXTENSION);
            if (in_array($ext, ['php', 'html', 'js', 'css'])) {
                $content = file_get_contents($path);
                $original = $content;
                foreach ($replacements as $k => $v) {
                    $content = str_replace($k, $v, $content);
                }
                
                // Specific updates for require paths
                if (strpos($path, 'includes') !== false) {
                    $content = str_replace("require_once 'db.php'", "require_once 'db.php'", $content);
                } else if (strpos($path, 'auth') !== false) {
                    $content = str_replace("require_once 'db.php'", "require_once '../includes/db.php'", $content);
                }
                
                if ($content !== $original) {
                    file_put_contents($path, $content);
                }
            }
        }
    }
}

// Run replacements deeply
process_dir($root, $replacements);

// Create functions.php
file_put_contents("$root/includes/functions.php", "<?php\n// Helper functions\nfunction sanitizeInput(\$data) {\n    return htmlspecialchars(stripslashes(trim(\$data)));\n}\n?>");

// Setup database dump
exec('c:\\xampp\\mysql\\bin\\mysqldump.exe -u root Quizzer > ' . escapeshellarg("$root/database.sql"));

echo "PHP RESTUCTURE DONE.\n";
?>
