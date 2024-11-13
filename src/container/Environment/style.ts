import {StyleSheet} from 'react-native';
import { Metrix } from '../../config';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:Metrix.HorizontalSize(300),
    marginVertical:10
  },
  circle:{
    height:Metrix.VerticalSize(20),
    width:Metrix.VerticalSize(20),
    backgroundColor:'transparent',
    borderRadius:100,
    borderColor:'black',
    borderWidth:1
  },
  itemText:{
    fontSize:Metrix.FontMedium,
    marginLeft:Metrix.HorizontalSize(50)
  },
  selected:{
    backgroundColor:'red'
  }
});

export default styles;
