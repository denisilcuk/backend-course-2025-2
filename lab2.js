
const currency = "EUR";
const exact_date = "20240910";

const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/ovdp";

const url = new URL(baseUrl);

url.searchParams.append("valcode", currency);
url.searchParams.append("date", exact_date);
url.searchParams.append("json", "");

console.log(url.toString());
