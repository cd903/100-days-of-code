current = 247;
days = 0;
totcals = 0;
pound = 3500;
workouts = [349,373,454,304,368,512,621];
workouts_avg = round(sum(workouts)) / len(workouts)

while current > 230:
    cals = current * 12
    cals = cals - 1200;
    burned = round(cals) + round(workouts_avg)

    totcals = totcals + burned;
    pounds_lost = round(burned) / pound
    current = current - pounds_lost;
    days = days + 1;


weeks = round(days / 7);
print(days);
print(totcals);
print(weeks)