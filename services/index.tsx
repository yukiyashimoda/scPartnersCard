import request,{gql} from "graphql-request";

export const getPartnersList = async() => {
  const query=gql`
  query PartnerList {
    partnerLists {
      categoryDropDown2
      createdAt
      id
      companyName
      shopName
      introduction
      terms
      benefit
      notice
      postNumber
      address
      telNumber
      googleMap
      businessTime
      holiday
      publishedAt
      updatedAt
      webSite
      image {
        url
      }
  }
  }
  `

  const result=await request('https://api-ap-northeast-1.hygraph.com/v2/clrjetogk04f001w5nmaj5bwr/master',query);
  return result;
}