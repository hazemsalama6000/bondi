import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class DateTransformService {
    pipe = new DatePipe('en-US'); // Use your own locale

    removeTimeAndTransToUTC(date) {
        let transformedDate = this.pipe.transform(date, 'yyyy-MM-dd');
        return transformedDate;
    }

    convertTimeStringToDateTimeInTimeZone(date, timeZone, timeInString) {
        let dateOnly = this.pipe.transform(date, 'YYYY-MM-dd');
        let dateInTimeZone = this.pipe.transform(dateOnly, 'YYYY-MM-dd HH:mm z', 'GMT +' + timeZone);
        let dateTime = dateInTimeZone!.replace(dateInTimeZone!.substring(11, 16), timeInString);
        // console.log(dateTime);
        return new Date(dateTime).toISOString();
    }

    convertDateTimeToUtc(date) {
        return new Date(date).toISOString();
    }

    takeUTCDateTimeReturnTimeInTimeZone(dateTimeInUtc, timeZone) {
        let dateInTimeZone = this.pipe.transform(dateTimeInUtc, 'YYYY-MM-dd HH:mm z', 'GMT +' + timeZone);
        return this.pipe.transform(dateInTimeZone, 'HH:mm', 'GMT +' + timeZone);
    }

    takeUTCDateTimeReturnInTimeZoneWithDateFormat(dateTimeInUtc, dateFormat, timeZone) {
        return this.pipe.transform(dateTimeInUtc, dateFormat, 'GMT +' + timeZone);
    }


    createUTCDateAndEditTime(date, timeInString) {
        let dateOnly = this.pipe.transform(date, 'YYYY-MM-dd');
        let UTCDate = new Date(dateOnly!).toISOString();
        let dateTime = UTCDate!.replace(UTCDate!.substring(11, 16), timeInString);
        return dateTime;
    }

    convertStrintTimeToUtc(timeString, timeZone) { //00:00
        let arr = timeString.split(':');
        let res = Number(arr[0]) - Number(timeZone);
        res = res < 0 ? res + 24 : res;
        res = res == 24 ? 0 : res;
        return this.checkNumberDigits(res) + ':' + arr[1];
    }

    convertUtctimeToTimeZone(timeString, timeZone) {
        let arr = timeString.split(':');
        let res = Number(arr[0]) + Number(timeZone);
        res = res < 0 ? res + 24 : res;
        res = res == 24 ? 0 : res;
        return this.checkNumberDigits(res) + ':' + arr[1];
    }

    checkNumberDigits(number) {
        if (number <= 9) {
            return '0' + number;
        }
        else {
            return number;
        }
    }

    getLocalTimeZoneDiffUtcInHours(): number {
        const currentDate = new Date();
        const localTimezoneOffsetHours = currentDate.getTimezoneOffset() / 60;
        return 0 - localTimezoneOffsetHours;
    }


}