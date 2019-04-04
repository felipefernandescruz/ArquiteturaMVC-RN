import React, { Component } from "react";
import { Container, Header, Content, Picker, Form, Text } from "native-base";
import { observer, inject } from "mobx-react";
import HomeController from "./HomeController";

@observer
export default class HomePage extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={HomeController.isSelected}
              onValueChange={value => HomeController.changeStyle(value)}
            >
              {HomeController.styles.map((item, index) => {
                return <Picker.Item label={item.name} value={index} />;
              })}
            </Picker>
          </Form>
          <Text>{HomeController.state ? HomeController.state.style : ""}</Text>
        </Content>
      </Container>
    );
  }
}
