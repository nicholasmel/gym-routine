import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import Calculation from "./Calculation";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";

function Home() {
  return (
    <Container>
      <Header />
      <Calculation />
      <Section backgroundImg={'https://s3.amazonaws.com/nikeinc/assets/80354/JustDoItHQ_20180620-JDIHQ-036_hd_1600.jpg?1529593278'} description={'Tips & Recommendations'} />
      <CardLeft
        exerciseImage={'https://miro.medium.com/max/1200/1*KJDDbsvhoAxP1JmAsCMKjA.jpeg'}
        exercise={'Bench Press'}
        tipOne={'"Five Points of Contact" -  head, shoulders, upperback, glutes, feet'}
        tipTwo={'Grip the barbell slighlty wider than should-width apart'} tipThree={'Slightly squeeze elbow togther during the decline, and slightly flare elbow during the incline'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://images.ctfassets.net/3s5io6mnxfqz/5bfSnUJeDm1RW7y1P5Zxzm/12e1144f62e7cd723c739d14291aced8/AdobeStock_402284878_2.jpeg?fm=jpg&w=900&fl=progressive'}
        exercise={'Incline Dumbbell Bench Press'}
        tipOne={'Set incline to 30\u00b0 or lower for optimal upper chest development'}
        tipTwo={'Keep elbow at 90\u00b0 bend at the bottom of the movement'}
        tipThree={'Do not lock out the elbows at the top of the movement'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://www.verywellfit.com/thmb/x-u5wW77XNnyKavPOzkW8DHoitg=/2121x1414/filters:fill(FFDB5D,1)/serious-man-training-upper-body-using-fly-machine-1060869384-0effce7eff3044289055fcd16a9c6788.jpg'}
        exercise={'Machine Chest Fly'}
        tipOne={'Place arms at chest level'}
        tipTwo={'Hands together at the top of the movement'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://image.boxrox.com/2021/10/Incline-dumbbell-press-scaled-e1635241695936.jpg'}
        exercise={'Dumbbell Shoulder Press'}
        tipOne={'Elbows at 90\u00b0 or slightly lower at the bottom of the movement'}
        tipTwo={'Avoid locking out at the top of the movement where weights touch'}
        tipThree={'Utilize legs to assist dumbbell placement at the beginning of the exercise'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-man-lifting-weights-at-gym-royalty-free-image-1597140869.jpg?crop=1.00xw:0.930xh;0,0.0699xh&resize=640:*'}
        exercise={'Dumbbell Lateral Raise'}
        tipOne={'Form does not have to be strict when pushed pass failure'}
        tipThree={'Recommend standing during the movemnt'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://i.ytimg.com/vi/6yMdhi2DVao/maxresdefault.jpg'} exercise={'Machine Rear Delt Fly'}
        tipOne={'Rear delts are over neglected'}
        tipTwo={'Hand position is preference, the most comfortable'}
        tipThree={'Slightly bend elbows'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://cdn.mos.cms.futurecdn.net/PUh4gpdENASaQybBDXAgPj-1024-80.jpg.webp'}
        exercise={'Dumbbell Bicep Curls'}
        tipOne={'Maintain straight posture at all times and do not lean backwards'}
        tipTwo={'Breaking form only done when passed failure'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://onnitacademy.imgix.net/wp-content/uploads/2020/05/pushdownopener.jpg'}
        exercise={'Tricep Pushdown'}
        tipOne={'Lean forward'}
        tipTwo={'Lock out at full extension'}
        tipThree={'Elbows slightly above 45\u00b0 at the top of the movement'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://www.muscleandfitness.com/wp-content/uploads/2018/04/1109-seated-wrist-curls.jpg?w=1100&quality=86&strip=all'}
        exercise={'Dumbbell Wrist Curl'}
        tipOne={'Overload by adding weight or reps over time'}
        tipTwo={'Isolating single joint'}
        tipThree={'Face palm down to perform wrist extensions'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://cdn.shopify.com/s/files/1/1228/5232/files/DSC06092_480x480.jpg?v=1616700341'}
        exercise={'Deadlift'}
        tipOne={'Recommend double over hand grip to avoid muscle imbalances'}
        tipTwo={'Conventional vs Sumo - choose most comfortable'}
        tipThree={'Advise sumo deadlift for injury pervention, utilize more legs and less stress on the lower back'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://image.boxrox.com/2021/10/lat-pulldown.webp'} exercise={'Lat Pulldown'}
        tipOne={'Recommend over-hand grip'}
        tipTwo={'1.5x shoulder width'}
        tipThree={'Slightly lean backwards'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://flo.health/media/1960/download/A%20woman%20doing%20seated%20cable%20row%20exercises.jpg?v=1'}
        exercise={'Seated Cable Row'}
        tipOne={'Utilize the chest supported row to avoid lower back strain'}
        tipTwo={'Full range of motion'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg?fm=jpg&w=900&fl=progressive'}
        exercise={'Squat'}
        tipOne={'Lower to parallel for an ideal range of motion'}
        tipTwo={'Stance is preference, the wider the stance the more glute activation'}
        tipThree={'Barbell placement higher to emphasize quads and lower for quads & glutes'}>
      </CardLeft>
      <CardRight
        exerciseImage={'https://thefitnessmaverick.com/wp-content/uploads/2020/11/leg-extensions-bad-1024x683.jpg'}
        exercise={'Leg Extension'}
        tipOne={'Pause at the top of the movement'}
        tipTwo={'Time under tension for 40 seconds'}
        tipThree={'Foot position based on preference and comfortability'}>
      </CardRight>
      <CardLeft
        exerciseImage={'https://www.muscleandfitness.com/wp-content/uploads/2017/08/1109-standing-calf-raise.jpg?w=1109&h=614&crop=1&quality=86&strip=all'}
        exercise={'Calf Raise'}
        tipOne={'Can be done sitting or standing'}
        tipTwo={'Slow and strict technique at the start and "cheat" when passed failure'}>
      </CardLeft>
      <Section backgroundImg={'https://s3.amazonaws.com/nikeinc/assets/80354/JustDoItHQ_20180620-JDIHQ-036_hd_1600.jpg?1529593278'} backgroundPosition={'bottom'} />
    </Container >
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
