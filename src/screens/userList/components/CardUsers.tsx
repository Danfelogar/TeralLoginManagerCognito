import {View, Text, Image} from 'react-native';
import React, {PureComponent} from 'react';
import {IUsersListPool} from '../../../model/IUsersListPool';
import {cardUserStyles} from '../stylesUserList';
import {dateConverter} from '../../../utils/dateConverter';

interface Props {
  user: IUsersListPool;
  idx: number;
}

export class CardUser extends PureComponent<Props> {
  render() {
    //global context
    //customStyles
    const {
      CardContent,
      contentStatus,
      contentPersonalData,
      imgCard,
      textFullName,
      textStatus,
      textStatus2,
      btnStats,
      textCC,
      textEmail,
    } = cardUserStyles();
    const {user, idx} = this.props;
    const emailIndex = user?.Attributes.findIndex(att => att?.Name === 'email');

    return (
      <View key={idx} style={CardContent}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548784.png',
          }}
          style={imgCard}
        />
        <View style={{flex: 1}}>
          <View style={contentStatus}>
            <Text style={textFullName} numberOfLines={1} ellipsizeMode="tail">
              {user?.Username}
            </Text>
            <View
              style={{
                ...btnStats,
                backgroundColor: user?.Enabled ? '#C0E6C9' : '#DC2626',
              }}>
              <Text style={textStatus2}>
                {user?.Enabled ? 'Activado' : 'Inactivo'}
              </Text>
            </View>
          </View>
          <Text style={textStatus}>{user?.UserStatus}</Text>
          <View style={contentPersonalData}>
            <Text style={textEmail}>{user?.Attributes[emailIndex]?.Value}</Text>
            <Text style={textCC}>
              {dateConverter(user?.UserLastModifiedDate)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
