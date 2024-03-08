import React from 'react'
import './CSFundamentals.css'
import MenuTitle from '../MenuTitle'
const CloudComputing = () => {
  return (
    <div className="menuitem">
      <MenuTitle title="What is Cloud Computing" url="https://www.youtube.com/watch?v=XBu54nfzxAQ&t=189s"/>
      <MenuTitle title="Types Of Cloud Service Providers" url="https://www.youtube.com/watch?v=1ERdeg8Sfv4"/>
      <MenuTitle title="AWS Cloud Practioner Training" url="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/?couponCode=IND21PM"/>
      <MenuTitle title="GCP Associate Cloud Engineer" url="https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/?couponCode=IND21PM"/>
      <MenuTitle title="Azure Fundamentals" url="https://www.udemy.com/course/az900-azure/?couponCode=IND21PM"/>
      <MenuTitle title="Fullstack Project with Cloud" url="https://www.udemy.com/course/microservices-with-node-js-and-react/?kw=node+js+micro&src=sac&couponCode=IND21PM"/>
    </div>
  )
}

export default CloudComputing