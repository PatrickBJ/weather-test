export const clockFormat = (time: Date, typeFormat: string) => {
  const hour = time.getHours();
  let hourFormatted = hour.toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  let suffix = "";

  if (typeFormat === "AM/PM") {
    suffix = hour > 12 ? " PM" : " AM";
    hourFormatted = (hour > 12 ? hour - 12 : hour).toString().padStart(2, "0");
  } else if (hour === 0) hourFormatted = "24";

  return `${hourFormatted}:${minutes}` + suffix;
};
