function submit_marks() {
    var subjects = ['s1', 's2', 's3', 's4', 's5', 's6'];
    var total = 0, valid = true;

    subjects.forEach(id => {
        var mark = parseInt(document.getElementById(id).value) || 0;
        if (mark < 0 || mark > 100) {
            valid = false;
        }
        total += mark;
    });

    if (!valid) {
        document.getElementById("demo").innerHTML = "❌ Please enter marks between 0-100.";
        return;
    }

    var per = total / 6;
    var grade, color;

    if (per >= 91) {
        grade = '🏆 A (Excellent)';
        color = '#28a745';
    } else if (per >= 81) {
        grade = '🎖 B (Very Good)';
        color = '#17a2b8';
    } else if (per >= 71) {
        grade = '👍 C (Good)';
        color = '#ffc107';
    } else if (per >= 61) {
        grade = '✔ D (Needs Improvement)';
        color = '#fd7e14';
    } else if (per >= 35) {
        grade = '⚠ F (Fail)';
        color = '#dc3545';
    } else {
        grade = "❌ Invalid or Failed";
        color = '#6c757d';
    }

    document.getElementById("demo").innerHTML =
        "<strong>Total Marks:</strong> " + total +
        "<br><strong>Percentage:</strong> " + per.toFixed(2) + "%" +
        "<br><strong>Grade:</strong> <span style='color:" + color + ";'>" + grade + "</span>";

    document.getElementById("progress").style.width = per + "%";
    document.getElementById("progress").style.background = color;
}

function resetForm() {
    var subjects = ['s1', 's2', 's3', 's4', 's5', 's6'];
    subjects.forEach(id => document.getElementById(id).value = '');
    document.getElementById("demo").innerHTML = "";
    document.getElementById("progress").style.width = "0%";
}
