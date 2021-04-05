/*
 *   Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
import React from 'react';
import DynamicImage from '../components/DynamicImage';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

import '../css/main.css';

const Unicorns = () => (
  <div className="page-unicorns">
    <header className="site-header">
      <div className="site-logo dark">Card Reservation</div>
      <div className="row column medium-8 large-6 xlarge-5 xxlarge-4">
        <h1 className="title">The Municipality of Springfield in British Columbia, Canada</h1>
        
      </div>
      <SiteNav/>
    </header>
    <div className="row column medium-10 large-8 xxlarge-6">
      <p className="content">
        Springfield BC is on the brink of a digital transformation. It was picked by the Canadian government to be a pioneer of smart city evolution. This comes as no surprise, the town has a history of forward-thinking innovation and as such was a natural fit for “Day One” type initiates in the digital space.   
      </p>
      <p className="content">
One of the first initiatives is the development of a  city wide electric autonomous car-share system. The city will ban car ownership and mandate the use of car sharing for all personal journeys, a recent ecological study has shown the need for a firm stance on emissions and a move to electric transportation is expected to vastly reduce the impact the local populous has been making to the delicate moose-ecosystem. 
      </p>
      <p className="content">
Springfield has had “significant” success partnering with AWS in the past, with its all-in, cloud 1st mentality it is looking to host the end to end car share system on AWS. This system will make or break the transformational journey, hence Springfield is looking to rely on AWS Professional Services to design and implement the complete architecture. Naturally this is a large endeavour and work is already complete to divide work into several Epics.“
      </p>
    </div>
    <SiteFooter/>
  </div>
);

export default Unicorns;
