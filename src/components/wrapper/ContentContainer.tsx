import React from "react";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";


interface ContentContainerProps extends ScrollViewProps {
    aware?: boolean; 
    children?: React.ReactNode; 
}

const ContentContainer:React.FC<ContentContainerProps> = props => {
      var Scroll: React.ComponentType<any> =  ScrollView;

    if (props.aware) {
        Scroll = KeyboardAwareScrollView;
    }
    return (
        <Scroll
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyboardShouldPersistTaps={'handled'}
            {...props}
            style={[styles.container, props.style]}>
            {props.children}
        </Scroll>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ContentContainer;
