/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const site = require('../../_data/site');
const {html} = require('common-tags');

/* eslint-disable max-len */

module.exports = ({title, slug}) => {
  return html`
    <ul class="w-breadcrumbs">
      <li class="w-breadcrumbs__crumb">
        <a
          class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event"
          data-category="web.dev"
          data-label="post, home breadcrumb"
          data-action="click"
          href="/"
        >
          ${site.titleVariation}
        </a>
      </li>
      <li class="w-breadcrumbs__crumb">
        <a
          class="w-breadcrumbs__link gc-analytics-event"
          data-category="web.dev"
          data-label="post, path breadcrumb"
          data-action="click"
          href=${path.join('/', slug)}
        >
          ${title}
        </a>
      </li>
    </ul>
  `;
};
