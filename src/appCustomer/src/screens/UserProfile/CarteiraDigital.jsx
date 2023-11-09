import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Wallet from '@/components/Wallet/Wallet';
import Checkin from '../../assets/Checkin.json';

const SECTIONS = [
  {
    header: 'Pagamento',
    icon: 'align-center',
    items: [
      {
        id: 'firstLine',
        icon: 'dollar-sign',
        label: 'Carteira Digital',
        type: 'toggle',
      },
    ],
  },
  {
    header: 'Cartões',
    icon: 'settings',
    items: [
      {
        id: 'visa',
        icon: 'credit-card',
        label: 'Visa',
        type: 'toggle',
      },
      {
        id: 'mastercard',
        icon: 'credit-card',
        label: 'MasterCard',
        type: 'toggle',
      },
    ],
  },
  {
    header: 'Conta na Mesa',
    icon: 'help-circle',
    items: [
      {
        id: 'contaNaMesaCartao',
        icon: 'check-square',
        label: 'Cartão',
        type: 'toggle',
      },
      {
        id: 'contaNaMesaDinheiro',
        icon: 'dollar-sign',
        label: 'Dinheiro',
        type: 'toggle',
      },
    ],
  },
];

function CarteiraDigital() {
  const navigation = useNavigation();
  // to get logged user data
  const { user } = useUser();
  const [selectedCard, setSelectedCard] = useState('visa');
  const [form, setForm] = React.useState({
    // Initial Data Simulated - because now the DB don't have payment data
    firstLine: 'Escolha abaixo como quer pagar.',
    visa: true,
    mastercard: false,
    contaNaMesaDinheiro: false,
    contaNaMesaCartao: false,
  });
  const sheetConfirmPayment = React.useRef();
  const sheetCheckinPayment = React.useRef();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContent}>
        {/* >>>>>>>>>>Header<<<<<<<<<<<< */}
        <View style={styles.header} />
        {/* >>>>>>>>>> Card <<<<<<<<<<<< */}
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Wallet />
          </View>
          {/* >>>>>>>>>>Payment Button<<<<<<<<<<<< */}
          <TouchableOpacity
            onPress={() => {
              // handle payment
              sheetConfirmPayment.current.open();
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Pagar</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
          {SECTIONS.map(({ header, items }) => (
            <View style={styles.section} key={header}>
              <Text style={styles.sectionHeader}>{header}</Text>

              {items.map(({ id, label, type, icon, color }) => (
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { backgroundColor: color }]}>
                    <FeatherIcon
                      name={icon}
                      color={COLORS.blueDark}
                      size={18}
                    />
                  </View>

                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={{ flex: 1 }} />
                  {console.log(form[id])}
                  {type === 'toggle' && (
                    <Switch
                      disabled={form[id] === selectedCard}
                      value={form[id]}
                      onValueChange={(value) =>
                        setForm({ ...form, [id]: value })
                      }
                    />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
        {/* Code for Bottom Sheets */}
        {/* CheckIn Payment Animation Bottom Sheet */}
        <RBSheet
          ref={sheetCheckinPayment}
          customStyles={{ container: styles.sheet }}
          height={650}
          openDuration={350}
          closeDuration={250}
        >
          <View style={styles.containerPayConfirm}>
            <View style={styles.containerLogoPayConfirm} />

            <Animatable.View
              delay={700}
              animation="fadeInUp"
              style={styles.containerFormPayConfirm}
            >
              <LottieView
                style={styles.checkInLottie}
                source={Checkin}
                autoPlay
                loop={false}
                marginTop={10}
              />
              <Text style={styles.textForm}>
                Pagamento Efetuado com Sucesso.
                <Text style={{ color: COLORS.linkTextGreen }}>
                  {'\n'}Obrigado!
                </Text>
              </Text>
              <Animatable.View
                delay={2000}
                animation="fadeInUp"
                onAnimationEnd={() => {
                  sheetCheckinPayment.current.close();
                  navigation.navigate('PedidosAcompanhamento');
                }}
                style={styles.footer}
              >
                <Text style={styles.textFooter}>
                  Caso não seja redirecionado para a tela de Acompanhamento de
                  Pedidos em alguns instantes
                </Text>
                <Pressable
                  onPress={() => navigation.navigate('CarteiraDigital')}
                >
                  <Text style={styles.textFooterLink}>Clique Aqui.</Text>
                </Pressable>
              </Animatable.View>
            </Animatable.View>
          </View>
        </RBSheet>

        {/* Payment Confirmation Bottom Sheet */}
        <RBSheet
          ref={sheetConfirmPayment}
          customStyles={{ container: styles.sheet }}
          height={450}
          openDuration={350}
          closeDuration={250}
          // onClose={() => sheetCheckinPayment.current.open()}
        >
          <Animatable.View delay={200}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetHeaderTitle}>Confirme o Pagamento</Text>
            </View>

            <View style={styles.sheetBody}>
              <Text style={styles.sheetBodyText}>
                {user.name}, você confirma o pagamento com{' '}
                <Text style={{ fontWeight: '700', color: COLORS.blueDark }}>
                  Forma de Pgto
                </Text>
                ?
              </Text>

              <TouchableOpacity
                onPress={() => sheetConfirmPayment.current.close()}
              >
                <View style={[styles.btn, { backgroundColor: COLORS.iconRed }]}>
                  <Text style={styles.btnText}>Cancelar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sheetConfirmPayment.current.close();
                  sheetCheckinPayment.current.open();
                }}
              >
                <View
                  style={[
                    styles.btn,
                    { backgroundColor: COLORS.linkTextGreen },
                  ]}
                >
                  <Text style={styles.btnText}>Confirmar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
}
export default CarteiraDigital;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    flexGrow: 1,
  },
  containerLogo: {
    flex: 2,
    opacity: 0.5,
  },
  image: {
    // height: 120,
    alignSelf: 'center',
    height: 75,
    width: 75,
    aspectRatio: 1 / 1,
    marginTop: 70,
  },
  containerForm: {
    flex: 5,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  profile: {
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAction: {
    marginTop: 16,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.linkTextGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  profileActionText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    marginRight: 8,
  },
  section: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.linkTextGreen,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.linkTextGreen,
  },
  rowIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  // Bottom Sheets Styles
  sheet: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sheetHeader: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetHeaderTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
  },
  sheetBody: {
    padding: 24,
  },
  sheetBodyText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: 24,
    textAlign: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.white,
  },
  // CheckIn Payment Bottom Sheet
  containerPayConfirm: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogoPayConfirm: {
    flex: 2,
    opacity: 0.5,
  },
  imagePayConfirm: {
    // height: 120,
    alignSelf: 'center',
    height: 75,
    width: 75,
    aspectRatio: 1 / 1,
    marginTop: 70,
  },
  containerFormPayConfirm: {
    flex: 5,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  checkInLottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  textForm: {
    fontSize: 26,
    marginHorizontal: 12,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'center',
    marginHorizontal: 40,
    marginTop: 200,
  },
  textFooter: {
    fontSize: 14,
    color: COLORS.black,
  },
  textFooterLink: {
    fontSize: 16,
    color: COLORS.linkTextGreen,
    fontWeight: 'bold',
  },
});
