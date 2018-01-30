import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {List, ListItem} from 'material-ui/List'
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText
} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class Signin extends Component {

  render() {
    return (
      <Card>
        <CardTitle/>
        <CardText>
          <h1>HOME</h1>
        </CardText>
      </Card>
    )
  }
}