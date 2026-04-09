import { ButtonProjects } from '@/src/shared/components/ButtonProjects';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HeaderIntro } from '../components/crypto-intro/HeaderIntro';
import { TechIntro } from '../components/crypto-intro/TechIntro';

export const CryptoIntroScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header de la intro */}
      <HeaderIntro/>

      {/* Body de la intro */}
      <TechIntro/>

      {/* Boton para ir a la pantalla principal */}
      <ButtonProjects routeLink={'/flows/crypto/(tabs)'} titleBtn='Ver Demo en Vivo'/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center' },
});