import { ReactNode, JSX } from "react";
import type { Translations } from "./en";

const translations: Translations = {
  Common: {
    ok: "OK",
    cancel: "Peruuta",
    submit: "Lähetä",
    search: "Haku",
    somethingWentWrong:
      "Jokin meni pieleen. JavaScript-konsolissa voi olla lisätietoja.",
    actions: "Toiminnot",
    standardActions: {
      open: "Avaa",
      edit: "Muokkaa",
      delete: "Poista",
      create: "Uusi",
      close: "Sulje",
    },
    boolean: {
      true: "Kyllä",
      false: "Ei",
    },
  },
  Profile: {
    attributes: {
      displayName: {
        title: "Nimi",
      },
      email: {
        title: "Sähköpostiosoite",
      },
    },
    keysView: {
      title: "Salausavaimet",
      description:
        "Kompassissa säilytettävät luottamukselliset tiedot salataan tietyissä tapauksissa epäsymmetrisellä salauksella. " +
        "Jos sinun tarvitsee toimia vastaanottajana tällaisille tiedoille, tarvitset salausavainparin. " +
        "Voit luoda sellaisen alla. " +
        "Avainparin luonti edellyttää salasanaasi, koska yksityinen avain salataan sillä. " +
        "Tulevaisuudessa mahdollistamme tehokäyttäjille omilla laitteilla säilytettävien salausavainten käytön, " +
        "jotta yksityinen avain ei koskaan poistu laitteelta.",
      resetPasswordWarning: (
        <>
          <strong>Varoitus!</strong> Jos unohdat salasanasi ja resetoit sen,
          menetät salausavaimesi ja kaikki sillä salatut tiedot.
        </>
      ),
      attributes: {
        id: {
          title: "Tunniste",
        },
        createdAt: {
          title: "Luotu",
        },
        actions: {
          title: "Toiminnot",
        },
        password: {
          title: "Salasana",
          helpText: "Syötä salasanasi yksityisen avaimen salaamista varten.",
        },
      },
      actions: {
        generate: {
          title: "Luo avainpari",
          enterPassword:
            "Syötä salasanasi yksityisen avaimen salaamista varten.",
          modalActions: {
            submit: "Luo avainpari",
            cancel: "Peruuta",
          },
        },
        revoke: {
          title: "Mitätöi avainpari",
          confirmation: (formattedCreatedAt: string) => (
            <>
              Haluatko varmasti mitätöidä avainparin, joka luotiin{" "}
              <strong>{formattedCreatedAt}</strong>? Mitätöidyllä avainparilla
              salattua tietoa ei voi enää purkaa. Tätä toimintoa ei voi perua.
            </>
          ),
          modalActions: {
            submit: "Mitätöi",
            cancel: "Peruuta",
          },
        },
      },
    },
  },
  Modal: {
    submit: "Submit",
    cancel: "Cancel",
  },
  DataTable: {
    create: "Luo uusi",
  },
  Event: {
    title: "Tapahtumat",
    headline: "Aika ja paikka",
    name: "Nimi",
    workInProgress:
      "Kompassi v2 on työn alla. Tämä ei ole vielä valmis etusivu, vaan taulukkokomponentin demo.",
  },
  UserMenu: {
    tickets: "Lipputilaukset",
    responses: "Kyselyvastaukset",
    keys: "Salausavaimet",
    signIn: "Kirjaudu sisään",
    signOut: "Kirjaudu ulos",
  },
  NotFound: {
    notFoundHeader: "Sivua ei löydy",
    notFoundMessage:
      "Annettu osoite ei noudata mitään tunnistettua muotoa. Ole hyvä ja tarkista osoite.",
  },
  SchemaForm: {
    submit: "Lähetä",
    warnings: {
      noFileUploaded: "Ei tiedostoja.",
    },
  },
  MainView: {
    defaultErrorMessage:
      "Jokin meni pieleen. JavaScript-konsolissa voi olla lisätietoja.",
  },
  FormEditor: {
    editField: "Muokkaa kenttää",
    moveUp: "Siirrä ylös",
    moveDown: "Siirrä alas",
    removeField: "Poista kenttä",
    addFieldAbove: "Lisää kenttä ylle",
    addField: "Lisää kenttä",
    save: "Tallenna lomake",
    cancel: "Palaa tallentamatta",
    open: "Avaa lomake",
    saveFailedErrorMessage:
      "Jokin meni pieleen lomaketta tallennettaessa. JavaScript-konsolissa voi olla lisätietoja.",

    tabs: {
      design: "Muokkaa",
      preview: "Esikatsele",
      properties: "Asetukset",
    },

    attributes: {
      title: {
        title: "Otsikko",
        helpText: "Ihmisluettava otsikko. Näytetään loppukäyttäjälle.",
      },
      description: {
        title: "Kuvaus",
        helpText: "Näytetään lomakkeen yläpuolella.",
      },
      thankYouMessage: {
        title: "Kiitosviesti",
        helpText:
          "Näytetään lomakkeen lähetyksen jälkeen. Mikäli kiitosviestiä ei ole asetettu, näytetään oletusviesti.",
      },
    },

    editFieldForm: {
      slug: {
        title: "Tekninen nimi",
        helpText:
          "Kentän tekninen nimi. Ei näytetä loppukäyttäjälle. Sallitut merkit: kirjaimet A-Za-z, numerot 0-9 ja alaviiva _. Ei saa alkaa numerolla. Kentän teknisen nimen tulee olla sama eri kieliversioissa.",
      },
      title: {
        title: "Otsikko",
        helpText:
          "Ihmisluettava otsikko. Näytetään loppukäyttäjälle. Mikäli otsikkoa ei ole asetettu, sen tilalla näytetään kentän tekninen nimi.",
      },
      helpText: {
        title: "Ohjeteksti",
        helpText: "Näytetään kentän alla.",
      },
      required: {
        title: "Pakollinen",
      },
      choices: {
        title: "Vaihtoehdot",
        helpText:
          'Kullakin rivillä tulisi olla yksi vaihtoehto muodossa "tekninen-nimi: Käyttäjälle näytettävä vaihtoehto".',
      },
      questions: {
        title: "Kysymykset",
        helpText:
          'Kullakin rivillä tulisi olla yksi kysymys muodossa "tekninen-nimi: Käyttäjälle näytettävä kysymys".',
      },
      encryptTo: {
        title: "Salaa vastaukset",
        helpText:
          "Jos haluat salata vastaukset tähän kenttään, luettele tässä kentässä käyttäjänimet jotka saavat purkaa salauksen (yksi per rivi). Näillä käyttäjillä tulee olla avainpari luotuna.",
      },
    },

    fieldTypes: {
      SingleLineText: "Yksirivinen tekstikenttä",
      MultiLineText: "Monirivinen tekstikenttä",
      Divider: "Erotinviiva",
      StaticText: "Kiinteä teksti",
      Spacer: "Tyhjä tila",
      SingleCheckbox: "Yksittäinen rasti ruutuun -kenttä",
      SingleSelect: "Valinta",
      MultiSelect: "Monivalinta",
      RadioMatrix: "Valintamatriisi",
      FileUpload: "Tiedoston lähetys",
      NumberField: "Numero",
      DecimalField: "Desimaaliluku",
      DateField: "Päivämäärä",
      DateTimeField: "Päivämäärä ja kellonaika",
      TimeField: "Kellonaika",
    },

    removeFieldModal: {
      title: "Vahvista kentän poisto",
      message: "Poistetaanko kenttä?",
      actions: {
        submit: "Poista",
        cancel: "Peruuta",
      },
    },

    editFieldModal: {
      title: "Muokkaa kenttää",
      actions: {
        submit: "Tallenna",
        cancel: "Peruuta",
      },
    },
  },

  SplashView: {
    engagement: (
      <>
        Toteutamme parhaillaan{" "}
        <strong>Kompassi-tapahtumanhallintajärjestelmän</strong>{" "}
        avaintoiminnallisuutta uudelleen moderneilla web-teknologioilla
        voidaksemme tarjota paremman käyttökokemuksen ja mukautettavuuden.
      </>
    ),
    backToKompassi: "Takaisin Kompassiin",
  },

  EventsView: {
    title: "Tapahtumat",
  },

  Tickets: {
    title: "Osta lippuja",
    forEvent: (eventName: string) => <>tapahtumaan {eventName}</>,
    returnToTicketsPage: "Palaa lippusivulle",
    Product: {
      listTitle: "Tuotteet",
      forEvent: (eventName: string) => <>tapahtumaan {eventName}</>,
      noProducts: {
        title: "Ei tuotteita saatavilla",
        message: "Yhtään tuotetta ei ole tällä hetkellä saatavilla.",
      },
      actions: {
        editProduct: "Muokkaa tuotetta",
        newProduct: {
          title: "Uusi tuote",
          modalActions: {
            submit: "Luo tuetc",
            cancel: "Peruuta",
          },
        },
        saveProduct: "Tallenna tuote",
        unpublishAllProducts: "Piilota kaikki tuotteet",
        viewOldVersion: {
          title: "Tuotteen vanha versio",
          label: "Näytä vanha versio tuotteesta",
          modalActions: {
            submit: "",
            cancel: "Sulje",
          },
        },
      },
      attributes: {
        product: "Tuote",
        title: "Otsikko",
        createdAt: "Luotu",
        unitPrice: {
          title: "Kappalehinta",
          helpText: "Kappalehinta euroissa.",
        },
        quantity: {
          title: "Lukumäärä",
          unit: "kpl",
        },
        total: "Yhteensä",
        description: {
          title: "Description",
          helpText:
            "Title and description will be shown to the customer on the ticket purchase page.",
        },
        isAvailable: {
          title: "Saatavuusaika",
          untilFurtherNotice: "Saatavilla toistaiseksi",
          untilTime: (formattedTime: String) =>
            `Saatavilla ${formattedTime} asti`,
          openingAt: (formattedTime: String) =>
            `Tulossa saataville ${formattedTime}`,
          notAvailable: "Ei saatavilla",
        },
        maxPerOrder: {
          title: "Maksimimäärä tilausta kohden",
          helpText:
            "Maksimimäärä tätä tuotetta jonka asiakas voi yhdellä tilauksella ostaa..",
        },
        eticketsPerProduct: {
          title: "Sähköisten lippujen määrä kappaletta kohden",
          helpText:
            "Jokaista myytyä kappaletta kohden luodaan näin monta sähköistä lippua. Jos tämä on asetettu nollaan, tuotteelle ei luoda sähköisiä lippuja.",
        },
        availableFrom: {
          title: "Tulee myyntiin",
          helpText:
            "Tuote tulee myyntiin kun tämä aika on ohitettu. Jos tätä ei ole asetettu, tuote ei näy kaupassa.",
        },
        availableUntil: {
          title: "Poistuu myynnistä",
          helpText:
            "Jos tämä on asetettu, tuote poistuu myynnistä kun tämä aika on ohitettu.",
        },
        countPaid: "Maksettu",
        countReserved: {
          title: "Myyty",
          description:
            "Tässä näytetään maksettujen tilausten lisäksi vahvistetut tilaukset, joita ei ole vielä maksettu.",
        },
        countAvailable: "Jäljellä",
        countTotal: "Yhteensä",
        actions: "Toiminnot",
        totalReserved: "Myyty yhteensä",
        totalPaid: "Maksettu yhteensä",
        revisions: {
          title: "Tuotteen versiot",
          description:
            "Jos tuotetta muokataan sen jälkeen kun sitä on myyty, siitä luodaan automaattisesti uusi versio joka korvaa vanhan lippukaupassa. Tuotteen saatavuusaikataulun tai kiintiöiden muuttaminen ei luo uutta versiota.",
          current: "Tämänhetkinen",
        },
        quotas: {
          title: "Kiintiöt",
          helpText:
            "Kiintiöt määrittelevät montako kappaletta tuotetta voidaan myydä. Tuote voi käyttää useampaa kiintiötä; tällöin tuotteen saatavuuden määrittelee kiintiö jota on vähiten jäljellä. Voit muokata ja luoda uusia kiintiöitä Kiintiöt-välilehdellä.",
        },
        selectedQuotas: "Valitut kiintiöt",
        soldOut: "Loppuunmyyty",
      },
    },
    Quota: {
      listTitle: "Kiintiöt",
      singleTitle: "Kiintiöt",
      forEvent: (eventName: string) => <>tapahtumaan {eventName}</>,
      actions: {
        newQuota: {
          title: "Uusi kiintiö",
          modalActions: {
            submit: "Luo kiintiö",
            cancel: "Peruuta",
          },
        },
        editQuota: "Muokkaa kiintiötä",
        saveQuota: "Tallenna kiintiö",
      },
      attributes: {
        name: "Nimi",
        countTotal: {
          title: "Kiintiön suuruus",
          helpTextNew:
            "Montako kappaletta tätä kiintiötä käyttäviä tuotteita voidaan yhteensä enintään myydä.",
          helpText: (countReserved: number) =>
            `Montako kappaletta tätä kiintiötä käyttäviä tuotteita voidaan yhteensä enintään myydä. Tästä kiintiöstä on myyty tällä hetkellä ${countReserved} yksikköä; kiintiötä ei voi asettaa tätä alemmaksi.`,
        },
        totalReserved: "Myyty yhteensä",
        products: {
          title: "Kiintiötä käyttävät tuotteet",
          helpText:
            "Tuote voi käyttää useampaa kiintiötä; tällöin tuotteen saatavuuden määrittelee kiintiö jota on vähiten jäljellä.",
        },
      },
    },
    Order: {
      listTitle: "Tilaukset",
      singleTitle: (orderNumber: string, paymentStatus: string) =>
        `Tilaus ${orderNumber} (${paymentStatus})`,
      forEvent: (eventName: string) => <>tapahtumaan {eventName}</>,
      contactForm: {
        title: "Yhteystiedot",
      },
      profileMessage: (
        ProfileLink: ({ children }: { children: ReactNode }) => JSX.Element,
      ) => (
        <>
          Jos sinulla on käyttäjätunnus samalla sähköpostiosoitteella, jolla
          teit tämän tilauksen, voit tarkastella tilauksiasi ja ladata sähköiset
          liput myös <ProfileLink>profiilistasi</ProfileLink>.
        </>
      ),
      attributes: {
        orderNumberAbbr: "Tilausnro.",
        orderNumberFull: "Tilausnumero",
        createdAt: "Tilausaika",
        eventName: "Tapahtuma",
        totalPrice: "Yhteensä",
        actions: "Toiminnot",
        totalOrders: (numOrders: number) => (
          <>
            Yhteensä {numOrders} tilaus{numOrders === 1 ? "" : "ta"}.
          </>
        ),
        firstName: {
          title: "Etunimi",
        },
        lastName: {
          title: "Sukunimi",
        },
        displayName: {
          title: "Asiakkaan nimi",
        },
        email: {
          title: "Sähköposti",
          helpText:
            "Tarkista sähköpostiosoite huolellisesti! Sähköiset liput lähetetään tähän osoitteeseen.",
        },
        phone: {
          title: "Puhelin",
        },
        acceptTermsAndConditions: {
          title: "Palveluehdot hyväksytty",
          checkboxLabel(url: string) {
            return (
              <>
                Hyväksyn{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  palveluehdot
                </a>{" "}
                (pakollinen).
              </>
            );
          },
        },
        provider: {
          title: "Maksunvälittäjä",
          choices: {
            NONE: "Ei mitään",
            PAYTRAIL: "Paytrail",
            STRIPE: "Stripe",
          },
        },
        status: {
          title: "Tila",
          choices: {
            NOT_STARTED: {
              title: "Tilauksen tila on tuntematon",
              shortTitle: "Tuntematon",
              message:
                "Tilauksesi tila on tuntematon. Yritä hetken kuluttua uudelleen ja ota tarvittaessa yhteyttä tapahtuman järjestäjään.",
            },
            PENDING: {
              title: "Tilaus odottaa maksua",
              shortTitle: "Odottaa maksua",
              message:
                "Tilauksesi on vahvistettu ja tuotteet on varattu sinulle, mutta emme ole vielä vastaanottaneet maksuasi. Käytä alla olevaa painiketta maksaaksesi tilauksesi mahdollisimman pian. Maksamattomat tilaukset perutaan.",
            },
            FAILED: {
              title: "Maksu epäonnistui",
              shortTitle: "Maksu epäonnistui",
              message:
                "Tilauksen maksu epäonnistui tai keskeytettiin. Ole hyvä ja yritä uudelleen. Maksamattomat tilaukset perutaan.",
            },
            PAID: {
              title: "Tilaus on valmis!",
              shortTitle: "Maksettu",
              message:
                "Tilauksesi on valmis ja olemme saaneet maksusi. Saat pian sähköpostiisi tilausvahvistuksen. Jos tilauksessasi on sähköisiä lippuja, ne toimitetaan tilausvahvistuksen liitteenä.",
            },
            CANCELLED: {
              title: "Tilaus on peruutettu",
              shortTitle: "Peruutettu",
              message:
                "Tilauksesi on peruutettu. Jos tilauksessa oli sähköisiä lippuja, ne on mitätöity. Jos uskot tämän olevan virhe, ota yhteyttä tapahtuman järjestäjään.",
            },
            REFUND_REQUESTED: {
              title: "Tilauksen maksu on palautettu",
              shortTitle: "Palautusta pyydetty",
              message:
                "Tilauksesi on peruutettu ja maksu on palautettu. Jos tilauksessa oli sähköisiä lippuja, ne on mitätöity. Jos uskot tämän olevan virhe, ota yhteyttä tapahtuman järjestäjään.",
            },
            REFUND_FAILED: {
              title: "Tilauksen maksu on palautettu",
              shortTitle: "Palautus epäonnistui",
              message:
                "Tilauksesi on peruutettu ja maksu on palautettu. Jos tilauksessa oli sähköisiä lippuja, ne on mitätöity. Jos uskot tämän olevan virhe, ota yhteyttä tapahtuman järjestäjään.",
            },
            REFUNDED: {
              title: "Tilauksen maksu on palautettu",
              shortTitle: "Palautettu",
              message:
                "Tilauksesi on peruutettu ja maksu on palautettu. Jos tilauksessa oli sähköisiä lippuja, ne on mitätöity. Jos uskot tämän olevan virhe, ota yhteyttä tapahtuman järjestäjään.",
            },
          },
        },
      },
      errors: {
        NOT_ENOUGH_TICKETS: {
          title: "Lippuja ei ole riittävästi",
          message:
            "Yhtä tai useampaa tuotetta ei ole saatavissa sitä määrää jonka yritit tilata.",
        },
        INVALID_ORDER: {
          title: "Virhe tilauksen tiedoissa",
          message:
            "Antamasi tilaustiedot eivät kelpaa. Tarkista tilaus ja yritä uudelleen.",
        },
        NO_PRODUCTS_SELECTED: {
          title: "Et valinnut yhtään tuotetta",
          message: "Valitse vähintään yksi tuote.",
        },
        UNKNOWN_ERROR: {
          title: "Virhe tilauksen käsittelyssä",
          message:
            "Tilauksesi käsittelyssä tapahtui virhe. Ole hyvä ja yritä uudelleen.",
        },
        ORDER_NOT_FOUND: {
          title: "Tilausta ei löydy",
          message:
            "Tilausta ei ole olemassa tai sitä ei ole liitetty käyttäjätiliisi.",
          actions: {
            returnToOrderList: "Takaisin tilauslistaan",
            returnToTicketsPage: "Takaisin lippukauppaan",
          },
        },
      },
      actions: {
        purchase: "Vahvista tilaus ja siirry maksamaan",
        pay: "Siirry maksamaan",
        viewTickets: "Näytä e-liput",
        newOrder: "Uusi tilaus",
        search: "Hae tilauksia",
        saveContactInformation: "Tallenna yhteystiedot",
        resendOrderConfirmation: {
          title: "Lähetä tilausvahvistus uudelleen",
          message: (emailAddress: string) => (
            <>
              <p>
                Haluatko varmasti lähettää tilausvahvistuksen (sis. mahdolliset
                e-liput) uudelleen?
              </p>
              <p>
                Tilausvahvistus lähetetään tähän osoitteeseen:{" "}
                <strong>{emailAddress}</strong>
              </p>
              <p>
                <strong>HUOM:</strong> Jos olet muuttamassa tilauksen
                sähköpostiosoitetta, muistathan tallentaa muutokset ennen kuin
                lähetät tilausvahvistuksen uudelleen.
              </p>
            </>
          ),
          modalActions: {
            submit: "Lähetä",
            cancel: "Sulje lähettämättä",
          },
        },
        cancelAndRefund: {
          title: "Peruuta ja palauta maksu",
          message: (
            <>
              <p>Tämä toiminto tekee seuraavat toimenpiteet:</p>
              <ol>
                <li>merkitsee tilauksen perutuksi,</li>
                <li>mitätöi mahdolliset e-liput,</li>
                <li>lähettää asiakkaalle peruutusilmoituksen, ja</li>
                <li>tekee maksunvälittäjälle pyynnön maksun palautuksesta.</li>
              </ol>
            </>
          ),
          modalActions: {
            submit: "Peruuta tilaus ja palauta maksu",
            cancel: "Sulje peruuttamatta tilausta",
          },
        },
        refundCancelledOrder: {
          title: "Palauta maksu",
          message: (
            <p>
              Haluatko varmasti pyytää maksunvälittäjää palauttamaan maksun?
            </p>
          ),
          modalActions: {
            submit: "Pyydä palautusta",
            cancel: "Sulje palauttamatta maksua",
          },
        },
        cancelWithoutRefunding: {
          title: "Peruuta palauttamatta maksua",
          message: (
            <>
              <p>Tämä toiminto tekee seuraavat toimenpiteet:</p>
              <ol>
                <li>merkitsee tilauksen perutuksi,</li>
                <li>mitätöi mahdolliset e-liput, ja</li>
                <li>lähettää asiakkaalle peruutusilmoituksen.</li>
              </ol>
              <p>
                <strong>HUOM:</strong> Maksua ei palauteta automaattisesti. Jos
                maksu tulee palauttaa kokonaan tai osittain, se on tehtävä
                maksunvälittäjän hallintapaneelista tai{" "}
                <em>Peruuta ja palauta maksu</em> -toiminnolla.
              </p>
            </>
          ),
          modalActions: {
            submit: "Peruuta tilaus",
            cancel: "Sulje peruuttamatta tilausta",
          },
        },
        retryRefund: {
          title: "Yritä palautusta uudelleen",
          message: (
            <p>
              Haluatko varmasti tehdä maksunvälittäjälle uuden
              maksunpalautuspyynnön?
            </p>
          ),
          modalActions: {
            submit: "Yritä uudelleen",
            cancel: "Sulje palauttamatta maksua",
          },
        },
        refundManually: {
          title: "Merkitse manuaalisesti palautetuksi",
          message: (
            <>
              <p>
                Haluatko varmasti merkitä tämän tilauksen manuaalisesti
                palautetuksi?
              </p>
              <p>
                <strong>HUOM:</strong> Tämän jälkeen maksua ei enää yritetä
                palauttaa automaattisesti. Olet vastuussa siitä, että palautus
                tulee asianmukaisesti hoidetuksi.
              </p>
            </>
          ),
          modalActions: {
            submit: "Mark as manually refunded",
            cancel: "Close without marking",
          },
        },
        refundCommon: {
          refundMayFail: (
            <p>
              <strong>HUOM:</strong> Maksun palautus voi epäonnistua, jos
              maksunvälittäjän hallussa ei ole riittävästi myyjän varoja.
              Tällöin tulee siirtää varoja maksunvälittäjälle ja yrittää
              uudelleen, tai hoitaa palautus loppuun muulla tavoin.
            </p>
          ),
        },
      },
    },
    PaymentStamp: {
      listTitle: "Maksutiedot",
      attributes: {
        createdAt: "Aikaleima",
        correlationId: "Tapahtumatunniste",
        type: {
          title: "Tyyppi",
          choices: {
            ZERO_PRICE: "Nollahinta",
            CREATE_PAYMENT_REQUEST: "Maksun luonti – Pyyntö",
            CREATE_PAYMENT_SUCCESS: "Maksun luonti – Onnistui",
            CREATE_PAYMENT_FAILURE: "Maksun luonti – Epäonnistui",
            PAYMENT_REDIRECT: "Uudelleenohjaus maksusta",
            PAYMENT_CALLBACK: "Jälki-ilmoitus maksusta",
            CANCEL_WITHOUT_REFUND: "Peruttu palauttamatta maksua",
            CREATE_REFUND_REQUEST: "Palautuksen luonti – Pyyntö",
            CREATE_REFUND_SUCCESS: "Palautuksen luonti – Onnistui",
            CREATE_REFUND_FAILURE: "Palautuksen luonti – Epäonnistui",
            REFUND_CALLBACK: "Jälki-ilmoitus palautuksesta",
            MANUAL_REFUND: "Manuaalinen palautus",
          },
        },
      },
      actions: {
        view: {
          title: "Näytä maksutiedot",
          message: (
            <p>
              Maksutiedoista löytyy teknisiä tietoja maksuprosessista.
              Maksutiedoista voi olla hyötyä, kun epäonnistuneita maksuja
              selvitellään maksunvälittäjän kanssa.
            </p>
          ),
          modalActions: {
            cancel: "Sulje",
            submit: "Lähetä-nappia ei ole :)",
          },
        },
      },
    },
    Receipt: {
      listTitle: "Kuitit",
      attributes: {
        id: "Tapahtumatunniste",
        createdAt: "Aikaleima",
        type: {
          title: "Tyyppi",
          choices: {
            PAID: "Tilausvahvistus",
            CANCELLED: "Peruutusilmoitus",
            REFUNDED: "Palautusilmoitus",
          },
        },
        status: {
          title: "Tila",
          choices: {
            REQUESTED: "Pyydetty",
            PROCESSING: "Käsitellään",
            FAILURE: "Epäonnistui",
            SUCCESS: "Lähetetty",
          },
        },
      },
    },
    Code: {
      listTitle: "E-lippukoodit",
      attributes: {
        code: "Koodi",
        literateCode: "Kissakoodi",
        usedOn: "Käytetty",
        productText: "Tuote",
        status: {
          title: "Tila",
          choices: {
            UNUSED: "Käyttämätön",
            USED: "Käytetty",
            MANUAL_INTERVENTION_REQUIRED: "Mitätöity",
            BEYOND_LOGIC: "Perätilassa",
          },
        },
      },
    },
    profile: {
      title: "Lipputilaukset",
      message:
        "Näet tässä lipputilauksesi, jotka on tehty vuonna 2025 tai myöhemmin. Voit myös maksaa maksamattomat tilauksesi ja ladata sähköiset lippusi täällä.",
      haveUnlinkedOrders: {
        title: "Vahvista sähköpostiosoitteesi nähdäksesi lisää tilauksia",
        message:
          "Sähköpostiosoitteellasi löytyy lisää tilauksia, joita ei ole liitetty käyttäjätunnukseesi. Vahvista sähköpostiosoitteesi nähdäksesi nämä tilaukset.",
      },
      actions: {
        confirmEmail: {
          title: "Vahvista sähköpostiosoitteesi",
          description:
            "Käyttäjätunnukseesi liitettyyn sähköpostiosoitteeseen lähetetään vahvistusviesti. Seuraa sähköpostissa olevia ohjeita vahvistaaksesi sähköpostiosoitteesi ja nähdäksesi loput tilauksesi.",
          modalActions: {
            submit: "Lähetä vahvistusviesti",
            cancel: "Peruuta",
          },
        },
      },
      noOrders: "Käyttäjätunnukseesi ei ole liitetty yhtään lipputilausta.",
    },
    admin: {
      title: "Lippukaupan hallinta",
      tabs: {
        orders: "Tilaukset",
        products: "Tuotteet",
        quotas: "Kiintiöt",
        reports: "Raportit",
        ticketControl: "Lipuntarkastus",
      },
    },
  },

  NewProgramView: {
    title: "Tarjoa ohjelmanumeroa",
    engagement: (eventName: string) => (
      <>
        Tervetuloa tarjoamaan ohjelmaa {eventName}
        {eventName.includes(" ") ? " " : ""}-tapahtumaan! Aloita valitsemalla
        tarjottavan ohjelman tyyppi alta.
      </>
    ),
    selectThisProgramType: "Valitse tämä ohjelmatyyppi",
    backToProgramFormSelection: "Takaisin ohjelmatyypin valintaan",
    forEvent: (eventName: string) => <>tapahtumaan {eventName}</>,
    submit: "Lähetä",
  },

  Program: {
    listTitle: "Ohjelma",
    singleTitle: "Ohjelmanumero",
    inEvent: (eventName: string) => <>tapahtumassa {eventName}</>,
    attributes: {
      title: "Otsikko",
      placeAndTime: "Paikka ja aika",
      actions: "Toiminnot",
    },
    actions: {
      returnToProgramList: (eventName: string) =>
        `Takaisin tapahtuman ${eventName} ohjelmaan`,
      addTheseToCalendar: "Lisää nämä ohjelmanumerot kalenteriin",
      addThisToCalendar: "Lisää tämä ohjelmanumero kalenteriin",
      signUpForThisProgram: "Ilmoittaudu tähän ohjelmanumeroon",
    },
    favorites: {
      markAsFavorite: "Merkitse suosikiksi",
      unmarkAsFavorite: "Poista suosikeista",
      signInToAddFavorites:
        "Kirjautumalla sisään voit merkitä ohjelmanumeroita suosikeiksi, suodattaa näkymää näyttämään vain suosikit ja lisätä suosikkiohjelmanumerot kalenteriisi.",
    },
    filters: {
      showOnlyFavorites: "Näytä vain suosikit",
      hidePastPrograms: "Piilota menneet ohjelmat",
    },
    tabs: {
      cards: "Kortit",
      table: "Taulukko",
    },
    feedback: {
      viewTitle: "Anna palautetta",
      notAcceptingFeedback: "Tämä ohjelmanumero ei ota vastaan palautetta.",
      fields: {
        feedback: {
          title: "Palaute",
          helpText:
            "Mitä pidit ohjelmanumerosta? Olethan rakentava ja empaattinen ohjelmanjärjestäjää kohtaan :) Palautteesi toimitetaan ohjelmanumeron järjestäjälle.",
        },
        kissa: {
          title: "Mikä eläin sanoo miau?",
          helpText: "Tällä varmistamme, että et ole robotti. Vihje: Kissa.",
        },
      },
      actions: {
        returnToProgram: "Palaa ohjelmanumeron sivulle",
        submit: "Lähetä palaute",
      },
      anonymity: {
        title: "Vastausten yhdistäminen sinuun",
        description:
          "Jos lähetät ohjelmapalautetta kirjautuneena, palautteesi yhdistetään käyttäjätiliisi. Käyttäjäprofiiliasi ei kuitenkaan jaeta ohjelmanumeron järjestäjälle.",
      },
      thankYou: {
        title: "Kiitos palautteestasi!",
        description: "Palautteesi on tallennettu.",
      },
    },
  },

  Survey: {
    listTitle: "Kyselyt",
    singleTitle: "Kysely",
    forEvent: (eventName: string) => <>tapahtumalle {eventName}</>,
    surveyTableFooter: (count: number) => (
      <>
        {count} kysely{count === 1 ? "" : "ä"}.
      </>
    ),
    responseListTitle: "Kyselyvastaukset",
    responseDetailTitle: "Kyselyvastaus",
    ownResponsesTitle: "Omat kyselyvastaukset",
    showingResponses: (filteredCount: number, totalCount: number) => (
      <>
        Näytetään {filteredCount} vastaus{filteredCount === 1 ? "" : "ta"}{" "}
        (yhteensä {totalCount}).
      </>
    ),
    dimensionTableFooter: (countDimensions: number, countValues: number) => (
      <>
        Yhteensä {countDimensions} dimensio{countDimensions === 1 ? "" : "ta"},{" "}
        {countValues} arvo{countValues === 1 ? "" : "a"}.
      </>
    ),
    summaryOf: (filteredCount: number, totalCount: number) => (
      <>
        Yhteenveto {filteredCount} vastauksesta (yhteensä {totalCount}).
      </>
    ),
    theseProfileFieldsWillBeShared:
      "Kun lähetät tämän kyselyn, seuraavat tiedot jaetaan kyselyn omistajan kanssa:",
    correctInYourProfile: (profileLink: string) => (
      <>
        Jos tiedot eivät ole oikein, korjaa ne{" "}
        <a href={profileLink} target="_blank" rel="noopener noreferrer">
          profiilissasi
        </a>{" "}
        (avautuu uuteen välilehteen).
      </>
    ),
    attributes: {
      slug: {
        title: "Tekninen nimi",
        helpText:
          "Koneellisesti luettava nimi kyselylle. Teknisen nimen täytyy olla uniikki tapahtuman sisällä. Teknistä nimeä ei voi muuttaa luomisen jälkeen.",
      },
      title: "Otsikko",
      isActive: {
        title: "Avoinna vastauksille",
        untilFurtherNotice: "Avoinna toistaiseksi",
        untilTime: (formattedTime: String) => `Avoinna ${formattedTime} asti`,
        openingAt: (formattedTime: String) => `Avautuu ${formattedTime}`,
        closed: "Suljettu",
      },
      activeFrom: {
        title: "Avautumisaika",
        helpText:
          "Jos tämä on asetettu, kysely alkaa ottaa vastaan vastauksia tähän aikaan.",
      },
      activeUntil: {
        title: "Sulkeutumisaika",
        helpText:
          "Jos tämä on asetettu, kysely lakkaa ottamasta vastaan vastauksia tähän aikaan.",
      },
      countResponses: "Vastauksia",
      languages: "Kielet",
      actions: "Toiminnot",
      anonymity: {
        secondPerson: {
          title: "Vastausten yhdistäminen sinuun",
          choices: {
            HARD: "Vastaukset ovat anonyymejä. Et voi palata katsomaan tai muokkaamaan vastauksiasi.",
            SOFT: "Jos vastaat tähän kyselyyn kirjautuneena, se yhdistetään käyttäjätiliisi, jotta voit palata katsomaan tai muokkaamaan vastauksiasi, mutta käyttäjäprofiiliasi ei jaeta kyselyn omistajan kanssa.",
            NAME_AND_EMAIL:
              "Jos vastaat tähän kyselyyn kirjautuneena, se yhdistetään käyttäjätiliisi. Nimesi ja sähköpostiosoitteesi jaetaan kyselyn omistajan kanssa. Voit palata katsomaan tai muokkaamaan vastauksiasi.",
          },
        },
        thirdPerson: {
          title: "Vastausten yhdistäminen käyttäjään",
          choices: {
            HARD: "Vastaukset ovat anonyymejä. Käyttäjät eivät voi palata katsomaan tai muokkaamaan vastauksiaan.",
            SOFT: "Jos käyttäjä vastaa tähän kyselyyn kirjautuneena, hänen vastauksensa yhdistetään hänen käyttäjätiliinsä, jotta hän voi palata katsomaan tai muokkaamaan vastauksiaan, mutta hänen henkilöllisyyttään ei jaeta sinulle.",
            NAME_AND_EMAIL:
              "Jos käyttäjä vastaa tähän kyselyyn kirjautuneena, hänen vastauksensa yhdistetään hänen käyttäjätiliinsä. Hänen nimensä ja sähköpostiosoitteensa jaetaan sinulle. Hän voi palata katsomaan tai muokkaamaan vastauksiaan.",
          },
        },
      },
      dimensions: "Dimensiot",
      dimension: "Dimensio",
      values: "Arvot",
      value: "Arvo",
      sequenceNumber: "Järjestysnumero",
      createdAt: "Lähetysaika",
      createdBy: "Lähettäjä",
      event: "Tapahtuma",
      formTitle: "Kyselyn otsikko",
      language: "Kieli",
      choice: "Vaihtoehto",
      question: "Kysymys",
      countMissingResponses: "Ei vastausta",
      percentageOfResponses: "Osuus vastauksista",
      technicalDetails: "Tekniset tiedot",
      loginRequired: {
        title: "Sisäänkirjautuminen vaaditaan",
        helpText:
          "Jos tämä on valittuna, kyselyyn vastaaminen vaatii sisäänkirjautumisen.",
      },
      maxResponsesPerUser: {
        title: "Käyttäjän vastausten maksimimäärä",
        helpText:
          "Yksittäisen käyttäjän vastausten maksimimäärä tähän kyselyyn. Jos arvoksi on asetettu 0, määrää ei rajoiteta. Huomaathan, että tämä vaikuttaa ainoastaan sisäänkirjautuneisiin käyttäjiin. Jotta rajoitus toimisi, kyselyyn vastaaminen tulee olla rajoitettu sisäänkirjautuneille käyttäjille.",
      },
    },
    actions: {
      createSurvey: "Luo kysely",
      fillIn: {
        title: "Täytä",
        disabledTooltip: "Suljettua kyselyä ei voi täyttää",
      },
      share: {
        title: "Jaa",
        tooltip: "Kopioi linkki leikepöydälle",
        success: "Linkki kyselyyn on kopioitu leikepöydälle.",
      },
      viewResponses: "Vastaukset",
      toggleSubscription: "Ilmoita uusista vastauksista",
      submit: "Lähetä",
      downloadAsExcel: "Lataa Excel-tiedostona",
      returnToResponseList: "Palaa vastauslistaukseen",
      returnToSurveyList: "Palaa kyselylistaukseen",
      returnToDimensionList: "Palaa dimensiolistaukseen",
      saveDimensions: "Tallenna dimensiot",
      saveProperties: "Tallenna asetukset",
      addDimension: "Lisää dimensio",
      addDimensionValue: "Lisää arvo",
      deleteDimension: {
        title: "Poista dimensio",
        cannotRemove:
          "Dimensiota ei voi poistaa, jos se on jo liitetty kyselyvastaukseen.",
        confirmation: (dimensionTitle: string) => (
          <>
            Poista dimensio <strong>{dimensionTitle}</strong> kaikkine
            arvoineen?
          </>
        ),
        modalActions: {
          submit: "Poista",
          cancel: "Peruuta",
        },
      },
      deleteDimensionValue: {
        title: "Poista arvo",
        cannotRemove:
          "Arvoa ei voi poistaa, jos se on jo liitetty kyselyvastaukseen.",
        confirmation: (dimensionTitle: string, valueTitle: string) => (
          <>
            Poista arvo <strong>{dimensionTitle}</strong> dimensionsta{" "}
            <strong>{valueTitle}</strong>?
          </>
        ),
      },
      deleteSurvey: {
        title: "Poista kysely",
        cannotRemove: "Kyselyä, joka on jo saanut vastauksia, ei voi poistaa.",
        confirmation: (surveyTitle: string) => (
          <>
            Haluatko varmasti poistaa kyselyn <strong>{surveyTitle}</strong>?
          </>
        ),
        modalActions: {
          submit: "Poista",
          cancel: "Peruuta",
        },
      },
      editDimension: "Muokkaa dimensiota",
      editDimensionValue: "Muokkaa arvoa",
      editSurvey: "Muokkaa",
    },
    tabs: {
      summary: "Yhteenveto",
      responses: "Vastaukset",
      properties: "Kyselyn asetukset",
      addLanguage: "Lisää kieliversio",
      texts: (languageName: string) => `Tekstit (${languageName})`,
      fields: (languageName: string) => `Kentät (${languageName})`,
    },
    thankYou: {
      title: "Kiitos vastauksistasi!",
      defaultMessage:
        "Vastauksesi on tallennettu. Voit nyt sulkea tämän välilehden.",
    },
    maxResponsesPerUserReached: {
      title: "Olet jo vastannut tähän kyselyyn",
      defaultMessage: (
        maxResponsesPerUser: number,
        countResponsesByCurrentUser: number,
      ) =>
        `Olet jo vastannut tähän kyselyyn${
          countResponsesByCurrentUser === 1
            ? ""
            : " " + countResponsesByCurrentUser + " kertaa"
        }. Voit vastata tähän kyselyyn enintään ${maxResponsesPerUser} ${
          maxResponsesPerUser === 1 ? "kerran" : "kertaa"
        }.`,
    },
    warnings: {
      choiceNotFound:
        "Vaihtoehtoa ei löydy. Se on voitu poistaa tämän vastauksen lähettämisen jälkeen.",
    },
    checkbox: {
      checked: "Valittu",
      unchecked: "Ei valittu",
    },
    addLanguageModal: {
      language: {
        title: "Kieli",
        helpText: "Vain tuettuja kieliä voi lisätä.",
      },
      copyFrom: {
        title: "Alusta kieliversiosta",
        helpText:
          "Uusi kieliversio luodaan valitun kieliversion pohjalta. Voit myös valita lähteä liikkeelle tyhjällä lomakkeella.",
      },
      actions: {
        submit: "Jatka",
        cancel: "Peruuta",
      },
    },
    deleteLanguageModal: {
      title: "Poista kieliversio",
      confirmation: (languageName: string) => (
        <>
          Haluatko varmasti poistaa kieliversion <strong>{languageName}</strong>
          ?
        </>
      ),
      modalActions: {
        submit: "Poista",
        cancel: "Peruuta",
      },
    },
    editDimensionModal: {
      editTitle: "Muokkaa dimensiota",
      addTitle: "Lisää dimensio",
      actions: {
        submit: "Tallenna dimensio",
        cancel: "Peruuta",
      },
      attributes: {
        slug: {
          title: "Tekninen nimi",
          // TODO add pattern for slug and document it in helpText
          helpText:
            "Koneluettava, lyhyt nimi dimensiolle. Teknistä nimeä ei voi muuttaa dimension luomisen jälkeen.",
        },
        localizedTitleHeader: {
          title: "Otsikko lokalisoituna",
          helpText:
            "Dimensiolle voi antaa otsikon eri kielillä. Otsikkoa ei tarvitse antaa kaikilla tuetuilla kielillä: jos otsikkoa ei ole annettu valitulla kielellä, käytetään tilalla oletuskieltä, ja jos sitäkään ei ole asetettu, teknistä nimeä.",
        },
        title: {
          fi: "Otsikko suomeksi",
          en: "Otsikko englanniksi",
          sv: "Otsikko ruotsiksi",
        },
        isKeyDimension: {
          title: "Avaindimensio",
          helpText: "Avaindimensioiden arvot näytetään vastauslistassa.",
        },
        isMultiValue: {
          title: "Moniarvoinen",
          helpText:
            "Jos tämä on valittuna, tähän dimensioon voidaan valita useita arvoja.",
        },
        isShownToSubject: {
          title: "Näytetään vastaajalle",
          helpText:
            "Jos tämä on valittuna, tämän dimension arvot näytetään vastaajalle yksittäisen vastauksen näkymässä hänen profiilissaan. Lisäksi, jos tämä dimensio on myös avaindimensio, se näytetään profiilin vastauslistassa.",
        },
      },
    },
    editValueModal: {
      editTitle: "Muokkaa arvoa",
      addTitle: "Lisää arvo",
      actions: {
        submit: "Tallenna arvo",
        cancel: "Peruuta",
      },
      attributes: {
        slug: {
          title: "Tekninen nimi",
          // TODO add pattern for slug and document it in helpText
          helpText:
            "Koneluettava, lyhyt nimi arvolle. Teknistä nimeä ei voi muuttaa dimension luomisen jälkeen.",
        },
        color: {
          title: "Väri",
          helpText:
            "Arvon väri vastauslistassa. Käytä kirkkaita värejä: ne vaalenevat tai tummenevat tarvittaessa.",
        },
        isInitial: {
          title: "Alkuarvo",
          helpText:
            "Jos tämä on asetettu, tämä arvo asetetaan kaikille uusille vastauksille lähettämisen yhteydessä.",
        },
        localizedTitleHeader: {
          title: "Otsikko lokalisoituna",
          helpText:
            "Arvolle voi antaa otsikon eri kielillä. Otsikkoa ei tarvitse antaa kaikilla tuetuilla kielillä: jos otsikkoa ei ole annettu valitulla kielellä, käytetään tilalla oletuskieltä, ja jos sitäkään ei ole asetettu, teknistä nimeä.",
        },
        title: {
          fi: "Otsikko suomeksi",
          en: "Otsikko englanniksi",
          sv: "Otsikko ruotsiksi",
        },
      },
    },
    createSurveyModal: {
      title: "Luo uusi kysely",
      actions: {
        submit: "Luo kysely",
        cancel: "Peruuta",
      },
    },
    editSurveyPage: {
      title: "Muokkaa kyselyä",
      actions: {
        submit: "Tallenna kentät",
      },
    },
  },

  SignInRequired: {
    metadata: {
      title: "Kirjautuminen vaaditaan – Kompassi",
    },
    title: "Kirjautuminen vaaditaan",
    message: "Tämä sivu edellyttää sisäänkirjautumista.",
    signIn: "Kirjaudu sisään",
  },

  Brand: {
    appName: (
      <>
        Kompassi<sup>v2 BETA</sup>
      </>
    ),
    plainAppName: "Kompassi",
  },

  LanguageSwitcher: {
    supportedLanguages: {
      fi: "suomi",
      en: "englanti",
      sv: "ruotsi",
    },
    // NOTE: value always in target language
    switchTo: {
      fi: "suomeksi",
      en: "In English",
      sv: "på svenska",
    },
  },
};

export default translations;
