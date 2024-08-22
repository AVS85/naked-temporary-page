import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
import { Box, Container } from '@mui/material';
// import { useStores } from '../../store';
// import { Dropzone } from '../../components/molecule';
import LogoSvg from '../../components/svg/logo';
import LogoSubtitleSvg from '../../components/svg/logo_subtitle';
import LogoSubtitleRuSvg from '../../components/svg/logo_subtitle_ru';
import LinkSvg from '../../components/svg/link';
import LinkRuSvg from '../../components/svg/link_ru';
import DelimiterSvg from '../../components/svg/delimiter';
import Eng from '../../components/svg/en';
import Rus from '../../components/svg/ru';

const Home = () => {
  const [lang, setLang] = useState('RU');
  const switchLang = (lang: 'EN' | 'RU') => setLang(lang);

  const isRu = lang === 'RU';
  const isEn = lang === 'EN';

  const name = (() => {
    switch (lang) {
      case 'RU':
        return 'https://nkd.ru/assets/Naked_portfolio_2024_ru.pdf';
      default:
        return 'https://nkd.ru/assets/Naked_portfolio_2024_en.pdf';
    }
  })();
  return (
    <Container
      sx={{
        // border: '1px solid green',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1,
        gap: '48px',
      }}
    >
      <Box
        sx={{
          // border: '1px solid grey',
          display: 'flex',
          gap: '9px',
          justifyContent: 'center',
        }}
      >
        <Box onClick={() => switchLang('RU')} sx={{ cursor: 'pointer' }}>
          <Rus fill={isRu ? '#231F20' : undefined} />
        </Box>
        <DelimiterSvg />
        <Box onClick={() => switchLang('EN')} sx={{ cursor: 'pointer' }}>
          <Eng fill={isEn ? '#231F20' : undefined} />
        </Box>
      </Box>

      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          gap: '200px',
          flex: 1,
          justifyContent: 'center',
          '@media (max-height: 550px)': {
            gap: '90px',
          },
        }}
      >
        <Box
          sx={{
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <LogoSvg />
          {isEn && <LogoSubtitleSvg />}
          {isRu && <LogoSubtitleRuSvg />}
        </Box>
        <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
          <a href={name} target="_blank" download>
            {isEn && <LinkSvg />}
            {isRu && <LinkRuSvg />}
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
