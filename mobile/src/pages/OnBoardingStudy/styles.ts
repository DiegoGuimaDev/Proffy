import styled from 'styled-components/native';

import background from '../../assets/images/on-boarding-background.png';
import { getColorByMode } from '../../theme/utils';

export interface IndicadorProps {
  mode?: 'primary' | 'secondary';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colorBackground};
`;

export const Header = styled.View`
  padding-horizontal: 63px;
  padding-bottom: 46px;
  padding-top: 69px;
  background-color: ${({ theme }) => theme.colorPrimary};
  height: 350px;
`;

export const HeaderContent = styled.ImageBackground.attrs({
  resizeMode: 'contain',
  source: background,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  margin-vertical: 96px;
  margin-horizontal: 40px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Archivo_500Medium;
  line-height: 44px;
  font-size: 40px;
  opacity: 0.16;

  color: ${({ theme }) => theme.colorTextBase};
`;

export const Message = styled.Text`
  margin-top: 24px;
  font-family: Poppins_500Medium;
  line-height: 34px;
  width: 206px;
  font-size: 24px;
  color: ${({ theme }) => theme.colorTextBase};
`;

export const Footer = styled.View`
  height: 40px;
  flex-direction: row;
  padding-horizontal: 40px;
  margin-bottom: 62px;
  justify-content: space-between;
  align-items: center;
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
`;

export const Indicator = styled.View<IndicadorProps>`
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-width: 1px;
  border-color: ${({ theme, mode }) =>
    !mode ? theme.colorTabBarInactiveTint : getColorByMode(theme, mode)};
  background-color: ${({ theme, mode }) =>
    !mode ? theme.colorTabBarInactiveTint : getColorByMode(theme, mode)};
  margin-right: 8px;
`;
