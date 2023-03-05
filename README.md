# Co2Cal

## Inspiration

Many people are unaware of the impact their daily activities have on the environment. Without knowing our daily carbon footprint, we may not realize how our lifestyle is impacting the planet. The importance of understanding our carbon footprint lies in the fact that greenhouse gases contribute to climate change and global warming, which have significant negative impacts on the environment, human health, and the economy.

Overall, Co2Cal can be a powerful tool for raising awareness about environmental issues, encouraging people to take action, and promoting sustainability.

## What it does

One of the main features of Co2Cal is **calculating the carbon footprint** for each activity within four big categories, including consumer goods, home utilities, restaurant & accommodation, and travel.

Another main feature is that after receiving users' inputs, Co2Cal analyzes the data to **provide specific recommendations** for each category. 

## How we built it

### Front-end

### Back-end

We use AWS Lambda service to host and run our backend. Our front-end makes REST API call to endpoint through Amazon API Gateway and  triggers AWS Lambda function, which returns fetched data from Climatiq data server. 

## Challenges we ran into

One challenge we faced during development was UI/UX design. Since we had a limited amount of time, we had to find a balance between user experience and the level of difficulty to implement. Additionally, another challenge we ran into was linking the front-end and back-end. Debugging during this process was difficult, as we had to go through every log in CloudWatch Logs to find where we went wrong.

## Accomplishments that we're proud of

The accomplishment we're most proud of is the purpose of this web app. As previously mentioned, Co2Cal can be a powerful tool for raising awareness about environmental issues and promoting sustainability. We believe that with Co2Cal, our planet will be better. 

In terms of the technical aspect, we're very proud of being able to proficiently use AWS Lambda and write everything in JavaScript, which greatly improves the compatibility and accessibility of our code.

## What we learned

In short, we learned a lot! Neither of us had much experience with designing UI/UX, but during the development, we gained many ideas from Creative Tim on how to improve our UI. Additionally, we learned how to use AWS Lambda, which helped us save a lot of time setting up a server for our back-end.

## What's next for Co2Cal

We still have many ideas for Co2Cal that we were unable to implement due to time constraints. However, we believe that the following features will be added in the near future:

- Calculating carbon footprint from credit card transactions
- A travel planner that prioritizes routes with lower carbon footprints
- Adding more specific choices within each category