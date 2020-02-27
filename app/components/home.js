import React from "react";
import bowies from "../../public/different-faces-of-david-bowie-still.jpg";
// import { AppRegistry, View, Image } from 'react-native';

export const Home = () => {
  return (
    <div id="header">
      <div class="webHead">
        so I turn myself to<div class="headAccent">FACE ME</div>

      </div>
      <img
        class="bowiegif"
        src="https://i.pinimg.com/originals/30/86/49/30864951f0e2ddcb0b9bf71e645b0cec.gif"
        alt="changes"
      />
    </div>
  );
};

// export class Home extends React.Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={{width: 50, height: 50}}
//           source={require('@expo/snack-static/react-native-logo.png')}
//         />
//         <Image
//           style={{width: 50, height: 50}}
//           source={{uri: 'https://facebook.github.io/react/assets/logo_og.png'}}
//         />
//       </View>
//     );
//   }
// }
