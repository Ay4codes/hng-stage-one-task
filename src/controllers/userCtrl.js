const timeZone = require("../utils/date");

class userCtrl {
    async home(req, res) {
        res.status(200).json({
            slack_name: 'Ayomide Ishola',
            current_day: timeZone.dayOfWeek(Number(timeZone.weekday())),
            utc_time: timeZone.getCurrentUTC(),
            track: 'backend',
            github_file_url: '',
            github_repo_url: '',
            status_code: 200
        });
    }
}

module.exports = new userCtrl