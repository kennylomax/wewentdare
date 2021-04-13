import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { provideConfig } from '@spartacus/core';
import {
  storeFinderTranslationChunksConfig,
  storeFinderTranslations,
} from '@spartacus/storefinder/assets';
import { StoreFinderRootModule } from '@spartacus/storefinder/root';
import {
  B2cStorefrontModule,
  DeliveryModePreferences,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CdcModule } from '@spartacus/cdc';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      featureModules: {
        storeFinder: {
          module: () =>
            import('@spartacus/storefinder').then((m) => m.StoreFinderModule),
        },
      },
      backend: {
        occ: {
          baseUrl: 'https://api.cu2qdtboy0-presalesm2-d1-public.model-t.cc.commerce.ondemand.com',
          prefix: '/occ/v2/'
        },
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        //baseSite: ['electronics-spa', 'apparel-uk-spa']
        //baseSite: ['powertools-spa']
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '3.0',
      },
      checkout: {
        guest: true,
        express: true,
        defaultDeliveryMode: [DeliveryModePreferences.LEAST_EXPENSIVE],
      },
    }),
    BrowserTransferStateModule,
    StoreFinderRootModule,
    CdcModule.forRoot({
      cdc: [
          {
              baseSite: 'electronics-spa',
              javascriptUrl: 'https://cdns.eu1.gigya.com/JS/gigya.js?apikey=3_loOsMcxvdXxsujNvN9PLamJxH1JTShlzEDjzN3A_CRQj57PFTbENMhW6z7Ea9X6W',
              //javascriptUrl: 'https://cdns.eu1.gigya.com/JS/gigya.js?apikey=3_U_SKRenPGZpDAag91CiCxh1iecSXqe8rcAF1wtNMIoNKNP9Bk8UY57oE0ZmI09fp',
              sessionExpiration: 120
          }
      ],
    }),
  ],
  providers: [
    provideConfig({
      i18n: {
        resources: storeFinderTranslations,
        chunks: storeFinderTranslationChunksConfig,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
