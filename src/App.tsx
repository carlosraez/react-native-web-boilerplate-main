import React, { useEffect, } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';
import { MenuDropDown } from './components/MenuDropDown/MenuDropDown';
import { NativeBaseProvider } from 'native-base';

import { QuoteText } from './components/QuoteText/QuoteText';
import { EmojiBar } from './components/EmojiBar/EmojiBar';
import { MenuDropSwitchOnOff } from './components/MenuDropSwitchOnOff/MenuDropSwitchOnOff';
import { ItemsSwitch } from './components/ItemsSwitch/ItemsSwitch';
import { ListItemsSwitch } from './components/ListItemsSwitch/ListItemsSwitch';
import Card from './components/Card/Card';
import { ListCard } from './components/ListCard/ListCard';
import { Title } from './components/Card/components/Title/Title';
import { Author } from './components/Card/components/Author/Author';


function App(): JSX.Element {

  const isWeb = Platform.OS === 'web';

  const temas = ['Eleccions 12M', 'Guerra Gaza', 'Habitatge', 'Ucraïna'];
  const nameMenu = "Temes"

  const authors = [
    {
      id: '1',
      name: 'Mireia Prats',
      subtitle: 'Especialista en educación',
      imageUri: 'data:image/jpeg;base64,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',
    },
    {
      id: '2',
      name: 'Jordi Sanz',
      subtitle: 'Historiador y escritor',
      imageUri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAWEBAVEBIbDRUWDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTItMT03ODAwIys0QD8uNzQuMDUBCgoKDg0OFQ8QFTcZFxk3KzctNzcrNzcrKzc3Nys3MysrLS03ODUrNzcrKysrLS03LS0tKysrKystKysrLSstN//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAD4QAAIBAgUCBAQEBAMHBQAAAAECAAMRBAUSITFBUQYTInFhgZGhIzJCwQcUcrFSYtEzkpOi4fDxJVNjc4L/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhMUEEEiJREzIUYXFC/9oADAMBAAIRAxEAPwDOhBEUEepjiJxLOnQxDHFowtG3k0FibeEpC0YphhB/QR+wjQLiGU7QTRENJ2h9MRVxsZymY5uDDsOisxBNrSvw4/FP9Ms8RxK2iPxT/TOn4/Bzcv7FjT/eXuDGwlFT5+cv8GNhNSKZE9BHgTtNYQrJIQBoJhDsIwiAIAwnLR7RCAdjAsOcuqaDUC+kdYqS3Mv8cdOBPS+0STolGOep8IFqwh2EDVQdpIAvMEUj4llX3+E5ItE7Dqoj9AkdakkK204jTR14tME9KM02hXaArHaPG2JKkOUCG0yCj7yahhONBCViIM6lOcLbxweLscQQxOLA3ga2Y00/M4v2BufpKvFZ2CCACRLIYpy6FlOKXJKrG4PvICD8U/0wFLH7bx1GuC9/8s6OOLjo589uy0pDcTRYNdhM7hzciazLl/L7iXxKJulY9n07EEH2iOIEl+IB+IP6RKlpcsdox/yH9B2rjvBGuO8jvAEw/GT+d/RM84d51a63tfeQIID8Qe0iUKRZDI5M0OFFzLnxI4XD0qfU2MqMrS5AHWT/ABYbPSXskolyjQjNuIGpJLynzXF6OOgkydIlbIVZyajAHadkGlVNneKU7LvQsiT2P0h8Ox4sfpLnyx2E6EHach501wdWPiu7so6zG/B+kE5JHH2l/oHYfSNNMdh9JKzpdEvxW+zPC/Y/SS6Dnix+ktRTHYfSdCDsPpJlnT6Fh4bT/Yp6rG/B+krMyzMi6Jsf1Ht7S/zbFLRpFrC/C7cnpKLwtlZxWIGsXQEtUPeavHqUXNrSKM2NxmoJ7YzKvD9bEAP+VCeTy00CeEkA3BJ7mbGhgALAbADawtDthSJLzyfBfDx4RWzzzG+HABcC3e0oMXgjTNxeer4ihyCPtMfm+EsSbdZZjyvsjL4sWrRn8qxhLhT14m/yz9PuJ5tiKZRta7WN/aeg5JX1LSPfTe02RkuTj5oNaLTxA34v/wCRKWo8N4rxTJXIKkLYWbpaVWJxg03BBvxLYZ4NWmYP42RNKuR+KraQTBLU2HtK5szDggbkHeQq2cMNQ0+xkrNFuiz+LNLgu2qi3NozDVbtcG46TK/zL7+o7/GXeTMdAJlTbcr6NMcahGuzeeHjd0/qEf4prasQR/hAEZ4VF6qfC5lfmuJ116jf5iJH/QIju0zGeI7ObAkTRM0qM1c6SQbDr8ZLVoaLplOKNTy7Beu8UNSrsbW2tFEUS1yZtbTlpW5Xmer0Vdn79DLUiedyY5Y5Uzv45qatArThhWEHaKWjLRTpiURgRn/EzampUu7XP9v3M9E8K5dTo0FCqAxUazbcn4zz/NkP8ygIsdIBB9zPUcsoCnTUHgKL/GdHjFFHOkryyYY0TbYSJWrOhsV2lg2YikLuthfYD8xHfeGw+Mw2J2Vhq6A7MflIUBlkrlaKDEYkGxt0lHmugqSeo7TUY/LtLWHF5T5pl3pIttaC0aouLWjzXGgBiOkv/CDEUwL/AJath9R/rKnOsKUcy28Ji6H/AO7/AEm1P4HI8qNSNTn1MNVsdxpG0yeb4BaaFl2BvcTW5yn4vPQXmWz3E6gaYG45nN8ZtyokzmVqy6jYb7XIkmrSUkEp6uu1wYBcSFujCwA6cydg8dTQKbEhmtv0nQbdlb9UiJSoLaxQk32ljhKQAAAt8JOp4qk2oKRqHSCwy3Ye8tgUSdmx8MppWo/akd5mWNyT3JM1uBXRgq7dxYfSY/FVQi3PXiOtsrQHFVwthfrvKrMqof0qb7+qGp2ZwRwObysc3dyu3q3j1qiY82Pw11DW/N0incDXUF9XPcxQUSJO2HxBNgeLAfWXORZp5g8t/wA4Gx7yBiwDa/ErqdbRUBX0+rntMDxrNjaa30b4ZXimt6NuYMicwtcOtwQT1948icZpp0ztRaatA2El5QB59O/+K/zkYiFy9wtWmTsNa39rxo8kvhlt4vypatTLNK2qMbuw5ZFAJv8AWbLC4ZdA1W46zHGpUTH4SlWPpWjUFHr2Fj/uzYsupB2nSe6ObKNasiZ15qo5pqCVA0XB08gdATtcn5Sh8LZg1coa9FEqNwQoSqp+Mvq2Jq0xZbMLdYHCUST5gpgGFoaMGk7J+bBKSayeO8wua+KqNRvLpsgPUu+lPrLHx7jHGHYHY2nkuEo6mIJsDzHxxUrbIalBJLbZd+JMPiQPMdUameHpP5ifWW/hqgBTpAdSD9TeZ1MSU8ykSfLZLW6XHBk7L8c9PD6r7rfy/gBxNONaox+Vapsu/FOahK7KTYi3WZXMsapc1FO9vrKrMcbUr1DUqHUx5hcQgWitx6jK4YYwaoSOT2TIjVgzMX6npGPtwdukZEomqiix9EnULEgkzb5dT3Ex2EsaiC36hNphWAtBCyNTnGLWjl43/M88/qY81XUadhND4wxdsPhqXdbmY57KLg+ow4VhBJ8hcfXIcpT223gcNSI2PPWLC0iXF+estXpW4G8ZbQzVFLXoXLWEUvMNhwTcj3ih6keyI7jUQLXHwMbWFtgv2hVXce+0klTbtOf7erRpSsjZFiWSqFPDf3moYTHmpodWsdmmxQ3APcTL58flGaXJ0fAncXF9A7RhEKwjGEwo6BKxWOFRsPVYEPSIDno4BXf33M9Dy/1IpI6CePY2uVqAG+lltt1M9QyDMlqomnoo191N+P2nUxpuCZy87qTSLTMVRVvtAYGq5TYAX3UHm3eZ7xR4k8usKAW50qbk7b/+JGrVcbXAqUDay3BB6joPlJ7JhG4bH/xGpMcM23UEzzXJcK1RzZeOdpsvEud4yrhTTqUtL6dyUIYg8kCZbwlnP8tWKVV9L2BJHB7yyKfq6LFJKUVIDn1HQwuLbdo2qp8kLwdIB95O8X11qYhFSx7+0hY42SX4r9LMfltSyUQMFl5DXcbDj4ydiKKuNJhaZuAfhBA+o9pS5NuwjBRVFFicOVYgbiNWkbXtD5jfVtxIgYzVG2jJNJSJmWUT5qkjgzVYfm0y+TXNX5GajCD1qPiIxUx3jIEtTAP5aazLYcMzHbjmXHijFXrm3S0jUqqsNhpJ5kqUXyN6SSsk5bT3LH2kupzO4anZLQAQ7++0ZEMLQqABj1ihaeHuLRRqKmyrqkqwtxJ4cEC/aQqoNxLKiiaQDvtOXlpJM247baKjFkE+3E1eAN6SH/KJncZSTt95pcClqaD/ACiUedJPFA2eAmpyHvA1GCgkkADkk2AhcRVVFZmNlAuTMPn2cnEEKl1pjoeWPczL43jyyv8Ao3Z/Ijij/Zq8fgjVwn81SudDE8cpxq+srMkz+pTqhr2vcMAdmNtr/Oaj+Gua08TQbCuB5iJYr/7lPj97fSZfxbkD4CtcXaizXpk7hhfg/G06mFVeN9HMzT9mprsvKGZpiMzpNUS9hxtYnof7z0L+RCDVQIReWSw0Ekgm4+Nv7zxLIMYExKOTvZhc+03xzWr5DIj7lSRtyYZIuL0WYp+6OeLq1c0mYJTRhe5VSbi+3Jnm1WsdPrYFg3J/MZc5jiKu92PHqB4Nu0y1epqN5ZjjYeTlSVJFnl7tUqGoxvYWBkvMz6DK3L8wVAFKn3G8mY6ur07qQfaX1SOf7Nu2Eo1gFFz0kWtid9uOsiKTxJVHBs3OwlSxmp5KRHcn3naeALdLS2o4ID4yWqAS1RKMmRPghZfl4pnVe5tLjAD1r8N5GkzLh+c9kMbooM3jg1StUI3uxkrC0NNrySiAb8EneHpKLxVAslldUSKCkjiwnSgWEpxlU7y6ii7HrxFB6pySKVzDcDneTAgAteRaQPNtodagOzCcnIm9fRthojMmp1Ub3YS5zfNqeFVAw1MR6VB3t3MzGb4lKdhSc678g/k+feUlaqzm7EsepJuZZLxll9W38UPi8h4lJLlljnGd1MSbH0UwdlB+57mVZnBOzVCEYKorRROcpu5MmZTmVTDVqdek2l0a47N3B+Bnpb+NcHjaQFalyPxaZAOk25W88ojlJG45izxqW+xsWX0e1aNBm2W0tRbDVAV5CnZl+EFh86xCWVrnSSVuL73HPfiVlPFHr9YcVAdwYu1pl69JO4uibiM1qOjKUFz+rTv8ZSVBvLGo/pkCuY0P8Fzx1zYOdVrcTkUtMpfZVpdbgWI2aWSpM1lmJ8uoD0Oze01IF4JA2NAnQIQU50JGF2CInCzDYG1+YUrGMIURYELD0YFxH02ggZMVoNn3jKZj9MYgaDedhqVGKSQAom3SV+d49ERkFtZ7foEPVxIpqWbgTI4isXZmPUkzBixfK2a5T1SOM5MbecimopFHRs6IAdiEUUAOxTl52AHSx7n6zkUUAsUUUUAEBNzl93p037qCffrMphaPpcMLakJQ+xuf7faanwxU1YYA/pZl9+v7yUQyVojCJKcSKxjCgmEE0I5gmgiOwNSPpKTOFZOwlHaBLO0aO0KqSQUsIkWSIdo04oemANzx1iit0CTZ55ntY+Yad7hTY24LdZVzrNcknmciLSovfJ2KcnZJAooooAdBnY2dvADsUUUAFediRSSAASSbAAXJM0eWZI9B0q4uiQlgURlvrvxt+3tACmwOW165Io0nqkW1aELaL9TbiWmC8I4qoQCEpgsQGeptf5XnrPh3NqCUggCoAQAipwOgt0+cj+K8nptTDg+X+Lr0m1hZDcfv8pHdEWeUuCAqGxKhjx+obH/v4TSZDpFAKosQx1DsTvb7ynxeEbW7lbBnbyhzZQeh+Y+sHkuMNPEFCTpcDY9Da4jcMl7Rp2EitzJZgGTeOVkZxGFJLanEacgkj06FyJa0qVgJGw67yx6QFZHqTqLE3MKgkkELPq3l4aq3BIsvuYpTeM80VkFBN/VdjFKZbZfBaMaTOS1bInX8zAe28E2XW/V9ov5Y/Zb+DJ9EARSYcvPRvtA1cK68i47jeMpxfZEsU48oFFOTsYqFFFFAAlFCTsL2FyPhL1Mgpm7CsGS42XkfeO8B5eMRjBRYX1U6ltyOBfoZY+KvCXlENQqU6lyQVXEBnuLni/aAJ7o1+Dy+k+DXy0CtT3p7C4sN95KxJp18KXuPMRSTvubDcTzTIMDiC5phf9opX1cC/wBvj8oahlT4bFGmaqfm0Mf9poLAix29/aRQMvvC2OAxxAbUwp1Dh0LFVWuOR2uQTv7yfifEQr16FIvUZWZnZGp6dDaLBbg2YXPUdu8y2UZYFxAAFQpo1K5fyAt11Hff25E3mAoouHOhldhV9L0712sAvp1G+w9N7HvGVCyMZm9PygbjSRW2S9wFbcW7A+Xf5iZ7Htoq02HISkfYgDb7TS+MaCpVNjqZ9Dt/8e9rD4EXMyOMe7A9QADvwYSY8D0TD2ZQRwROGnG+H21YakefQAfltJLrGRS+SKyzjCFqCDcSQO4cbya2wgcHTjsS8ggYvMpc8zoLdKZ36mMzjN9IKId+pmZsWNzEnPpFkIdsVW7G55iiDb7xSouLXF1rm95FvfmNZ7mORZlSpHWux6iFVZxFhkSQ2SkVmY4L0l1FrfmHeVU1OLX8Kp/Q39pmVTa81YJNrZzfJilLRwCchANoMy4zGr/hif8A1XCkdfNB/wCG03uE8I4ZcYR/MKUDs1Ff5kGrrI3Urx1PG8xP8J6WrMqR/wACVT/ykfvN/lGV4JcarpX8wl2aitmutQhiTe9rW1dIjdNgzD57mSYTE1KYDFkqEAgWU2PeSKWaU8X5jJhtNV6TkNq1K1RBfiw3439pO/iFk1CpWet56I4Rx5dxqdtbb83+0osnNZU0+WadAufWzeX5hJF9uuw4jR4Buw2W/jYimKhNdrXRR6aVMaid/kALD4zS4fGilSq0GdCys5cICtClTAANzzfffngcTLUMQCfLUihQp0jqJOl6oDEG9u5FrDqRzLLL8Rh1Fc1nCU/L0srt+JUF/wAxHF+bAC+/tHQshnjeqi+XYAAUFYk/rGphYHruB9Z5+TufeXOe5l/MFNAYYdLqhY+pySWPyv06bSkEVjRPRPBjXwo+DOPvf95auJReA3/AqDtVP9hL2rGjwJL9iNU5g7Xj3BvEotzGFD0zYTPZ7mwF0Q79TCZxm2kFEO/UzM6Sxud5VKfSLIQvbGrdjcwujaFRY5htKi0haDFD6YoACWSaYiilEjpxJFJZKRYopSy0jZ01qOkcswH7/tKGr194opuwL4HK8l3M4BtAvFFLmUG2/hJXWnjK7tuFwdQ2H5msy7AdTzPTcnxeEaqBRwnlObkscMtIg2PXvvb5xRSuUFTZF7QLGYQMXqKoAcMarNSA1AjYX+f2mT8TYugKYp0iK9Q4yhYKAyByOLj+k7DvFFCD0RWymz3H4fDVqjWWtVKgIlgVokOxN/mQe9x0vM/luWtiGdqofStVUcD0+SWJuWvwBY+52iijskg1Kg8pFuAQd9jrvc8/Df7/AAkQRRQGRsv4f1N66fBCPv8A9JrKqRRSYiZOQJp9ZQZ1mQW6Kd+sUUJukRBWzOMSTcxy/CKKZzQFUwhWKKDAZpiiigQf/9k=',
    },
  ];

  const itemSwitch = {
    id: '2',
    name: 'Jordi Sanz',
    subtitle: 'Historiador y escritor',
    imageUri: 'data:image/jpeg;base64,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',
  }

  const itemsCardList = [
    {
      title: 'Dani Alves recorre al pare de Neymar per pagar la fiança i sortir en llibertat avui mateix',
      author: "Oriol Whel",
      city: "Washington",
      imageUri: "https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg",
      onImagePress: () => { },
      showActionIcon: true,
      positionActionBar: "Horizontal"
    },
    {
      title: 'Dani Alves recorre al pare de Neymar per pagar la fiança i sortir en llibertat avui mateix',
      author: "Oriol Whel",
      city: "Washington",
      imageUri: "https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg",
      onImagePress: () => { },
      showActionIcon: false,
    },
    {
      title: 'Dani Alves recorre al pare de Neymar per pagar la fiança i sortir en llibertat avui mateix',
      author: "Oriol Whel",
      city: "Washington",
      imageUri: "https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg",
      onImagePress: () => { },
      showActionIcon: false,
    }
  ];


  useEffect(() => {
    console.log('isWeb', isWeb)
  }, [])

  const handleItemSelect = (item: string) => {
    console.log('Seleccionado:', item);
  };

  const handleSelectItem = (active: boolean) => {
    console.log('fui activado', active);

  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
        <ScrollView>
          <MenuDropDown items={temas} nameMenu={nameMenu} onItemSelected={handleItemSelect} />
          <MenuDropSwitchOnOff items={temas} nameMenu={nameMenu} />
          <QuoteText text="Al principi tot anava bé, però després el noi va començar a controlar-li el mòbil, amb qui podia sortir i amb qui no." />
          <ListItemsSwitch items={authors} />
          <EmojiBar
            clapsCountInitial={0}
            smilesCountInitial={0}
          />
          <ItemsSwitch isUnique toggleUniqueSwitch={handleSelectItem} />
          <Card
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            imagePosition='top'
          >
            <Title title="Bayona y 'Robot Dreams', sin Oscar en una gala donde triunfa 'Oppenheimer': todos los premiados" />
            <Author author="Oriol Whel" city="Washington" emojibarRigth />
          </Card>
          <Card
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            imagePosition='top'
          >
            <Title title="Bayona y 'Robot Dreams', sin Oscar en una gala donde triunfa 'Oppenheimer': todos los premiados" />
            <Author author="Oriol Whel" city="Washington" />
            <EmojiBar
              clapsCountInitial={0}
              smilesCountInitial={0}
            />
          </Card>
          <Card
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            imagePosition='bottom'
          >
            <Title title="Bayona y 'Robot Dreams', sin Oscar en una gala donde triunfa 'Oppenheimer': todos los premiados" />
          </Card>
          <Card
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            imagePosition='left'
          >
            <Title title="Alto el foc a Gaza? Insinuacions, declaracions i silencis que l'apropen i l'allunyen" imagePosition="left" />
          </Card>
          <Card
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            imagePosition='left'
          >
            <Title title="Alto el foc a Gaza? Insinuacions, declaracions i silencis que l'apropen i l'allunyen" imagePosition="left"  author="" city="" />
           
          </Card>
          <ListCard items={itemsCardList} direction="right" />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;

/*  <Card
            title={'Bayona i "Robot dreams", sense Oscar en una gala on triomfa "Oppenheimer": tots els premiats'}
            author="Oriol Whel"
            city="Washington"
            imageUri="https://img.3cat.cat/multimedia/jpg/8/3/1713910820738_670.jpg"
            onImagePress={() => { }}
            showActionIcon={true}
            positionActionBar="horizontal"
          /> */