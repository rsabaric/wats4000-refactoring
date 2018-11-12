export default {
    formatDate: function (timestamp){
      let date = new Date(timestamp * 1000);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let daynum = date.getDate();
      let month = date.getMonth();

      let hour = date.getHours();
      if (hour === 12) {
        hour = 'Noon';
      } else if (hour === 0) {
        hour = 'Midnight';
      } else if (hour > 12) {
        hour = hour - 12 + 'PM';
      } else if (hour < 12) {
        hour = hour + 'AM';
      }
      return `${ months[month] } ${ daynum } @ ${ hour }`;
    }
}
