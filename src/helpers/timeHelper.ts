export const clockFormat = (time: Date, typeFormat: string = "") => {
    const hour = time.getHours();
    const hourFormatted = (hour > 12 ? hour-12: hour).toString().padStart(2,'0');
    const minutes = time.getMinutes().toString().padStart(2,'0');
    const suffix = typeFormat === "AM/PM" ? (hour > 12 ? " PM":" AM") :"";
    return `${hourFormatted}:${minutes}`+suffix;
}