var Pushover = require('pushover-js').Pushover;

exports.handler = function(event, context) {

  const pushover = new Pushover(process.env['PUSHOVER_USER'], process.env['PUSHOVER_TOKEN']);

  var sns = event.Records[0].Sns
  var alertTimestamp = sns.Timestamp;
  var alertSubject = sns.Subject;
  var alertMessage = sns.Message;

  pushover
    .setPriority(1)
    .setTimestamp(alertTimestamp)
    .send(alertSubject, alertMessage)

};
