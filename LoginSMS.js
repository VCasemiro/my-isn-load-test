import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 20, duration: "1m" },
        { target: 20, duration: "3m30s" },
        { target: 0, duration: "1m" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_1",
    },
  },
};

export function scenario_1() {
  let response;

  group(
    "page_1 - https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SIGNUPORSIGNINWITHPHONE_EMPOWERTESTAUTOMATION/oAuth2/v2.0/authorize?x-client-CPU=arm64-v8a&response_type=code&x-client-Ver=1.5.9&code_challenge_method=S256&x-client-DM=SM-G781B&x-client-OS=33&x-client-SKU=MSAL.Android&client_id=1b02374b-ccfe-4bed-9686-bc30d56e452a&ui_locales=en&client-request-id=1c69ba5f-c9d0-4b34-90a4-5747edc40f80&instance_aware=false&scope=https%3A%2F%2Fstgb2cisnetworld.onmicrosoft.com%2Fmyisn-api%2Fgeneral.access%20openid%20offline_access%20profile&redirect_uri=com.isn.empower%3A%2F%2Fauth&state=MTkyMTg3OWYtOTlkYi00OGU3LTk2NTYtOWFlYmJmNzAyYTliLWQxZjE0NTM1LTFjYjMtNDU5NS04NzBjLTA2MTBhNTc2Mjk5Ng&prompt=login&code_challenge=999Y5fHQTbuyJ6IwTWQyLr-uYsoLdxfmcl0IE-XNiRc",
    function () {
      response = http.get(
        "https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SIGNUPORSIGNINWITHPHONE_EMPOWERTESTAUTOMATION/oAuth2/v2.0/authorize?x-client-CPU=arm64-v8a&response_type=code&x-client-Ver=1.5.9&code_challenge_method=S256&x-client-DM=SM-G781B&x-client-OS=33&x-client-SKU=MSAL.Android&client_id=1b02374b-ccfe-4bed-9686-bc30d56e452a&ui_locales=en&client-request-id=1c69ba5f-c9d0-4b34-90a4-5747edc40f80&instance_aware=false&scope=https%3A%2F%2Fstgb2cisnetworld.onmicrosoft.com%2Fmyisn-api%2Fgeneral.access%20openid%20offline_access%20profile&redirect_uri=com.isn.empower%3A%2F%2Fauth&state=MTkyMTg3OWYtOTlkYi00OGU3LTk2NTYtOWFlYmJmNzAyYTliLWQxZjE0NTM1LTFjYjMtNDU5NS04NzBjLTA2MTBhNTc2Mjk5Ng&prompt=login&code_challenge=999Y5fHQTbuyJ6IwTWQyLr-uYsoLdxfmcl0IE-XNiRc",
        {
          headers: {
            "upgrade-insecure-requests": "1",
            "sec-ch-ua":
              '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
          },
        }
      );
      sleep(2.1);

      response = http.post(
        "https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation/client/perftrace?tx=StateProperties=eyJUSUQiOiIxYzJlMTkxZi1kNDZkLTQ0MjktYWI4YS1jZmUwYzIyMzliZjQifQ&p=B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation",
        '{"navigation":{"type":1,"redirectCount":0},"timing":{"connectStart":1703079735636,"navigationStart":1703079735634,"secureConnectionStart":0,"fetchStart":1703079735636,"domContentLoadedEventStart":1703079736541,"responseStart":1703079735971,"domInteractive":1703079736541,"domainLookupEnd":1703079735636,"responseEnd":1703079736503,"redirectStart":0,"requestStart":1703079735637,"unloadEventEnd":1703079735985,"unloadEventStart":1703079735985,"domLoading":1703079735986,"domComplete":1703079736612,"domainLookupStart":1703079735636,"loadEventStart":1703079736612,"domContentLoadedEventEnd":1703079736541,"loadEventEnd":1703079736612,"redirectEnd":0,"connectEnd":1703079735636},"entries":[{"name":"https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SIGNUPORSIGNINWITHPHONE_EMPOWERTESTAUTOMATION/oAuth2/v2.0/authorize?x-client-CPU=arm64-v8a&response_type=code&x-client-Ver=1.5.9&code_challenge_method=S256&x-client-DM=SM-G781B&x-client-OS=33&x-client-SKU=MSAL.Android&client_id=1b02374b-ccfe-4bed-9686-bc30d56e452a&ui_locales=en&client-request-id=1c69ba5f-c9d0-4b34-90a4-5747edc40f80&instance_aware=false&scope=https%3A%2F%2Fstgb2cisnetworld.onmicrosoft.com%2Fmyisn-api%2Fgeneral.access%20openid%20offline_access%20profile&redirect_uri=com.isn.empower%3A%2F%2Fauth&state=MTkyMTg3OWYtOTlkYi00OGU3LTk2NTYtOWFlYmJmNzAyYTliLWQxZjE0NTM1LTFjYjMtNDU5NS04NzBjLTA2MTBhNTc2Mjk5Ng&prompt=login&code_challenge=999Y5fHQTbuyJ6IwTWQyLr-uYsoLdxfmcl0IE-XNiRc","entryType":"navigation","startTime":0,"duration":976,"initiatorType":"navigation","deliveryType":"","nextHopProtocol":"http/1.1","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":0,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":3,"responseStart":336,"firstInterimResponseStart":0,"responseEnd":868,"transferSize":126589,"encodedBodySize":126289,"decodedBodySize":415164,"responseStatus":200,"serverTiming":[],"unloadEventStart":350,"unloadEventEnd":350,"domInteractive":906,"domContentLoadedEventStart":906,"domContentLoadedEventEnd":906,"domComplete":976,"loadEventStart":976,"loadEventEnd":976,"type":"reload","redirectCount":0,"activationStart":0,"criticalCHRestart":0},{"name":"visible","entryType":"visibility-state","startTime":0,"duration":0},{"name":"https://stg-cdn.isnetworld.com/empower/staging/login.html","entryType":"resource","startTime":893,"duration":1123,"initiatorType":"xmlhttprequest","deliveryType":"","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":893,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"firstInterimResponseStart":0,"responseEnd":2016,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":200,"serverTiming":[]}]}',
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/json; charset=UTF-8",
            "x-csrf-token":
              "ekxBTUYvaXNRWllET0VIVXFWSUFlWnptcWtHWjY2b2lnZit4UW9lUlNCayswYWlSMXpPNVlYdWRIUGZ1Sk9hVTJzM04vaDhqZ0NVSlVMQ1pxQ0hWc3c9PTsyMDIzLTEyLTIwVDEzOjQyOjE2LjM0MTcyNTNaO2tlK0l6OUtyQTUwU1NMalFxYU02d1E9PTt7IlRhcmdldEVudGl0eSI6IlNpZ25JbiIsIk9yY2hlc3RyYXRpb25TdGVwIjoxfQ==",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua":
              '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
          },
        }
      );
      sleep(12.2);

      response = http.post(
        "https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation/SelfAsserted/DisplayControlAction/vbeta/sendPhoneCodeControl/SendCode?tx=StateProperties=eyJUSUQiOiIxYzJlMTkxZi1kNDZkLTQ0MjktYWI4YS1jZmUwYzIyMzliZjQifQ&p=B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation",
        {
          countryCode: "US",
          nationalNumber: "67981219773",
        },
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-csrf-token":
              "ekxBTUYvaXNRWllET0VIVXFWSUFlWnptcWtHWjY2b2lnZit4UW9lUlNCayswYWlSMXpPNVlYdWRIUGZ1Sk9hVTJzM04vaDhqZ0NVSlVMQ1pxQ0hWc3c9PTsyMDIzLTEyLTIwVDEzOjQyOjE2LjM0MTcyNTNaO2tlK0l6OUtyQTUwU1NMalFxYU02d1E9PTt7IlRhcmdldEVudGl0eSI6IlNpZ25JbiIsIk9yY2hlc3RyYXRpb25TdGVwIjoxfQ==",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua":
              '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
          },
        }
      );
      sleep(7.8);

      response = http.post(
        "https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation/SelfAsserted/DisplayControlAction/vbeta/sendPhoneCodeControl/VerifyCode?tx=StateProperties=eyJUSUQiOiIxYzJlMTkxZi1kNDZkLTQ0MjktYWI4YS1jZmUwYzIyMzliZjQifQ&p=B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation",
        {
          countryCode: "US",
          nationalNumber: "67981219773",
          verificationCode: "1",
        },
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-csrf-token":
              "ekxBTUYvaXNRWllET0VIVXFWSUFlWnptcWtHWjY2b2lnZit4UW9lUlNCayswYWlSMXpPNVlYdWRIUGZ1Sk9hVTJzM04vaDhqZ0NVSlVMQ1pxQ0hWc3c9PTsyMDIzLTEyLTIwVDEzOjQyOjE2LjM0MTcyNTNaO2tlK0l6OUtyQTUwU1NMalFxYU02d1E9PTt7IlRhcmdldEVudGl0eSI6IlNpZ25JbiIsIk9yY2hlc3RyYXRpb25TdGVwIjoxfQ==",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua":
              '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
          },
        }
      );
      sleep(1.6);

      response = http.post(
        "https://stgb2cisnetworld.b2clogin.com/stgb2cisnetworld.onmicrosoft.com/B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation/SelfAsserted?tx=StateProperties=eyJUSUQiOiIxYzJlMTkxZi1kNDZkLTQ0MjktYWI4YS1jZmUwYzIyMzliZjQifQ&p=B2C_1A_SignUpOrSignInWithPhone_EmpowerTestAutomation",
        {
          nationalNumber: "67981219773",
          verificationCode: "1",
          countryCode: "US",
          request_type: "RESPONSE",
        },
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-csrf-token":
              "ekxBTUYvaXNRWllET0VIVXFWSUFlWnptcWtHWjY2b2lnZit4UW9lUlNCayswYWlSMXpPNVlYdWRIUGZ1Sk9hVTJzM04vaDhqZ0NVSlVMQ1pxQ0hWc3c9PTsyMDIzLTEyLTIwVDEzOjQyOjE2LjM0MTcyNTNaO2tlK0l6OUtyQTUwU1NMalFxYU02d1E9PTt7IlRhcmdldEVudGl0eSI6IlNpZ25JbiIsIk9yY2hlc3RyYXRpb25TdGVwIjoxfQ==",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua":
              '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
          },
        }
      );
    }
  );
}
