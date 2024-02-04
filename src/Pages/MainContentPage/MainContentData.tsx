import DeliveredProjects from "../../components/MainContent/DeliveredProjects/DeliveredProjects"
import { Footer } from "../../components/MainContent/Footer/footer"
import { ContactDetails } from "../../components/MainContent/contactDetails/contactDetails"
import ContentImage from "../../components/MainContent/contentImage/contentImage"
import { OfferedService } from "../../components/MainContent/offeredService/offeredService"
import PersonalData from "../../components/MainContent/personalData/personalData"
import { WorkedService } from "../../components/MainContent/workedService/workedService"

export const MainContentData = () => {
  
  return (
<>
<ContentImage />
      <div id="personalDataSection">
        <PersonalData />
      </div>
      <OfferedService />
      <WorkedService />
      <DeliveredProjects />
      <ContactDetails />
      <Footer />
</>
  )
}
