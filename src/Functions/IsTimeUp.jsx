const isTimeUp = (date, time) => {
    const timeLeft = new Date(`${date}T${time}`).getTime() - new Date().getTime();
    return (timeLeft / 1000 < 1);
}

export default isTimeUp;