import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { provideConfig, provideDefaultConfig } from '@spartacus/core';
import {
  organizationTranslationChunksConfig,
  organizationTranslations,
} from '@spartacus/organization/administration/assets';
import { AdministrationRootModule } from '@spartacus/organization/administration/root';
import {
  orderApprovalTranslationChunksConfig,
  orderApprovalTranslations,
} from '@spartacus/organization/order-approval/assets';
import { OrderApprovalRootModule } from '@spartacus/organization/order-approval/root';
import { B2bStorefrontModule, defaultB2bOccConfig } from '@spartacus/setup';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2bStorefrontModule.withConfig({
      featureModules: {
        organizationOrderApproval: {
          module: () =>
            import('@spartacus/organization/order-approval').then(
              (m) => m.OrderApprovalModule
            ),
        },
        organizationAdministration: {
          module: () =>
            import('@spartacus/organization/administration').then(
              (m) => m.AdministrationModule
            ),
        },
      },
      backend: {
        occ: {
          baseUrl: 'https://api.cu2qdtboy0-presalesm2-d1-public.model-t.cc.commerce.ondemand.com',
          prefix: '/occ/v2/',
        },
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['powertools-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '3.0',
      },
    }),
    BrowserTransferStateModule,
    AdministrationRootModule,
    OrderApprovalRootModule,
  ],
  providers: [
    provideDefaultConfig(defaultB2bOccConfig),
    provideConfig({
      i18n: {
        resources: organizationTranslations,
        chunks: organizationTranslationChunksConfig,
      },
    }),

    provideConfig({
      i18n: {
        resources: orderApprovalTranslations,
        chunks: orderApprovalTranslationChunksConfig,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
