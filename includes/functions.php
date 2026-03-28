<?php
// Helper functions
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}
?>