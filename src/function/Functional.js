const Functional = {
    getTimeAgo(time) {
        let currentTime = new Date();
        let timeAgo = new Date(time);
        let difference = currentTime - timeAgo;
        let minutes = Math.floor(difference / 60000);
        if (minutes < 1) {
            return "Vừa xong";
        } else if (minutes < 60) {
            return `${minutes} phút`;
        } else if (minutes < 1440) {
            return `${Math.floor(minutes / 60)} giờ`;
        } else if (minutes < 43200) {
            return `${Math.floor(minutes / 1440)} ngày`;
        } else {
            return `${Math.floor(minutes / 43200)} tháng`;
        }
    },
    formattedMoney(moneyDonate) {
        if (moneyDonate !== null && moneyDonate !== undefined) {
            let moneyString = moneyDonate.toString();
            let count = 0;
            for (let i = moneyString.length - 1; i >= 0; i--) {
                count++;
                if (count % 3 === 0 && i !== 0) {
                    moneyString = moneyString.slice(0, i) + "." + moneyString.slice(i);
                }
            }
            return `${moneyString}`;
        } else {
            return "0";
        }
    },
    setTime(time) {
        const currentDate = new Date(time);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Chuyển đổi sang định dạng 12 giờ
        const formattedHours = hours.toString().padStart(2, "0"); // Đảm bảo giờ có hai chữ số
        const formattedMinutes = minutes.toString().padStart(2, "0"); // Đảm bảo phút có hai chữ số
        return `${day}/${month}/${year} - ${formattedHours}:${formattedMinutes} ${period}`;
    }
}

export default Functional