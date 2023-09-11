const timeZone = require("../utils/date");

class userCtrl {
    async home(req, res) {
        res.status(200).json({
            slack_name: req.query?.slack_name ? req.query.slack_name : 'Ayomide Ishola',
            current_day: timeZone.dayOfWeek(Number(timeZone.weekday())),
            // Used luxon to get utc time because the server time is 10sec slower to the grader requirement
            utc_time: timeZone.getCurrentUtcWithLuxon(),
            track: req.query?.track ? req.query.track : 'backend',
            github_file_url: 'https://github.com/Ay4codes/hng-stage-one-task/blob/main/src/controllers/userCtrl.js',
            github_repo_url: 'https://github.com/Ay4codes/hng-stage-one-task/',
            status_code: 200
        });
    }
}

module.exports = new userCtrl