var yearInput,monthInput,dayInput,calcBtn;

document.addEventListener("DOMContentLoaded", function() {
    yearInput = document.getElementById("year_field");
    monthInput = document.getElementById("month_field");
    dayInput = document.getElementById("day_field");
    calcBtn = document.getElementById("calcBtn");
    calcBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if(isBetween(dayInput.value,1,31) && isBetween(monthInput.value,1,12) &&
            isBetween(yearInput.value, 0, 9999)) {
                var nowDate = new Date();
                var givenDate = setGivenDate();

                const diffMs = nowDate.getTime() - givenDate.getTime();

                const diffDate = new Date(diffMs);
                const years = diffDate.getUTCFullYear() - 1970;
                const months = diffDate.getUTCMonth();
                const days = diffDate.getUTCDate() + 1;
                console.log(days);

                setDiffInPage(document.getElementById("years"), years);
                setDiffInPage(document.getElementById("months"), months);
                setDiffInPage(document.getElementById("days"), days);
        } else {
            alert("Day: 1-31, Month: 1-12, Year must be between 0 and 9999");
        }
    });
  });

const setGivenDate = () => {
    var givenDate = new Date();

    givenDate.setFullYear(parseInt(yearInput.value));
    givenDate.setMonth(parseInt(monthInput.value) - 1);
    givenDate.setDate(parseInt(dayInput.value));

    return givenDate;
};

const setDiffInPage = (element, value) => {
    element.textContent = value;
};

const isBetween = (value,startValue, endValue) => {
    return value >= startValue && value <= endValue;
}
