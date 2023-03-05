# Co2Cal

## Inspiration

Even though climate change and global warming have been among the hottest topics in recent decades, many people are unaware of the impact their daily activities have on the environment. Without knowing our daily carbon footprint, we may not realize how our lifestyle is impacting the planet. The importance of understanding our carbon footprint lies in the fact that greenhouse gases contribute to climate change and global warming, which have significant negative impacts on the environment, human health, and the economy.

With that in mind, Co2Cal can be a powerful instrument for increasing environmental awareness,, encouraging people to take action, and promoting sustainability.

## What it does

The principle feature of Co2Cal is **calculating the carbon footprint** for each individual based on their activities within four big categories, including consumer goods, home utilities, restaurant & accommodation, and transportation.

Another main feature is that after receiving users' inputs, Co2Cal will analyze their data and **provide customized recommendations** for each category to help reduce carbon emission.

## How we built it

We have implemented a serverless architecture for our web application, where ReactJS manages the client-side logic and UI. For backend functionality, AWS Lambda is used. The front-end communicates with the API endpoint through AWS API Gateway, which triggers the Lambda function. The Lambda function fetches data from the Climatiq data server and returns it to the client.

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
