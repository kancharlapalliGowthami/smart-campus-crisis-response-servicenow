(function executeRule(current, previous) {

    var text = (current.description + "").toLowerCase();

    if (text.includes("pain") || text.includes("fainted") || text.includes("bleeding")) {
        current.emergency_type = "Medical";
        current.severity = "High";
    }

    else if (text.includes("fire") || text.includes("smoke")) {
        current.emergency_type = "Fire";
        current.severity = "High";
    }

    else if (text.includes("wifi") || text.includes("server") || text.includes("system down")) {
        current.emergency_type = "Technical";
        current.severity = "Medium";
    }

    else if (text.includes("harassment") || text.includes("threat")) {
        current.emergency_type = "Harassment";
        current.severity = "High";
    }

})(current, previous);