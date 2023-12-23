// Define a Webapi class that handles OS-related functionality
export default class Webapi {

    // Method to determine the OS of the current user
    GetOS() {

        // Access the userAgent and platform properties of the navigator object
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        // Determine the OS based on the platform and userAgent properties
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        // Return the determined OS
        return os;
    }


    GetScreenResolution() {
        // Get the width and height of the current viewport
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // Return the width and height as a string
        return `${width}x${height}`;
    }

    GetBrowserVersion() {
        let userAgent = navigator.userAgent;
        let browser = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        let version = browser[2] || userAgent.match(/rv:(\d+)/i) || [];
        let result = browser[1] + " " + version[1];
        return result;
    }

    GetBrowser() {
        let userAgent = navigator.userAgent;
        let browser = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

        return browser[1];
    }

    GetLanguage() {
        return navigator.language
    }

    GetLanguages() {
        return navigator.languages
    }

    GetOnline() {
        return navigator.onLine
    }

    GetPlatform() {
        return navigator.platform
    }

    GetProduct() {
        return navigator.product
    }

    GetUserAgent() {
        return navigator.userAgent
    }

    GetVendor() {
        return navigator.vendor
    }

    GetVendorSub() {
        return navigator.vendorSub
    }

    GetCookieEnabled() {
        return navigator.cookieEnabled
    }

    async GetBatteryInfo() {
        try {
            const battery = await navigator.getBattery();
            return battery.charging;
        } catch (error) {
            console.error('Error retrieving battery information:', error);
            // Handle the error accordingly
            return false;
        }
    }

    async GetIP(){
        // fetch('/api/getip')
        // .then(res => res.text())
        // .then(json => {
        //     return json
        // })

        const res = await fetch('/api/getip')
        const json = await res.text()
        return json

    }



}