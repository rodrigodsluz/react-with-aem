/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import './Page/Page';
import './Text/Text';
import './Container/Container';
import './ExperienceFragment/ExperienceFragment';

import {MapTo} from '@adobe/aem-react-editable-components';

import {
    ContainerV1, ContainerV1IsEmptyFn,
    TabsV1, TabsV1IsEmptyFn,
    AccordionV1,AccordionV1IsEmptyFn,
    CarouselV1,CarouselV1IsEmptyFn
} from '@adobe/aem-core-components-react-spa';

import {
    TitleV2,TitleV2IsEmptyFn,
    BreadCrumbV2,BreadCrumbV2IsEmptyFn,
    ButtonV1,ButtonV1IsEmptyFn,
    ImageV2,ImageV2IsEmptyFn,
    LanguageNavigationV1,
    NavigationV1,
    TeaserV1,TeaserV1IsEmptyFn,
    DownloadV1,DownloadV1IsEmptyFn,
    SeparatorV1,SeparatorV1IsEmptyFn,
    ListV2,ListV2IsEmptyFn
} from '@adobe/aem-core-components-react-base';

MapTo('rodrigo-luz-test/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('rodrigo-luz-test/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('rodrigo-luz-test/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo('rodrigo-luz-test/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});

MapTo('rodrigo-luz-test/components/navigation')(NavigationV1);
MapTo('rodrigo-luz-test/components/languagenavigation')(LanguageNavigationV1);

MapTo('rodrigo-luz-test/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo('rodrigo-luz-test/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});
