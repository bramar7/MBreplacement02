import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  /*name: faker.name.findName(), */
  name: sample([
    'XB_2020_COUPON1', 'XB_2020_TOUT1', 'XB_2020_TOUT2','MB_2020_FRIEND4','MB_2020_PROMO', 'MB_2020_PROMO2', 'MB_2020_PROMO3', 'XB_2021_FRIEND1',
    'XB_2021_COUPON4', 'XB_2021_CONTEST1', 'XB_2021_CONTEST2', 'XB_2021_COUPON3', 'XB_2021_FRIEND2', 'XB_2021_FOOD1', 'XB_2021_FOOD2', 'MB_2022_GOTL_MAR01',
    'MB_2022_GOTL_MAR02', 'MB_2022_GOTL_MAR03', 'XB_2019_NEWS01', 'MB_2020_NEWS_APRIL', 'MB_2021_COUPON_MARCH', 'MB_2022_FOOD_POPEYE',
    'MB_2022_FOOD_COCO', 'MB_2022_ENTERTAINMENT_FEB'
  ]),
  company: faker.company.companyName(),
  /*startDate: faker.date.recent(), */
  startDate: sample([
    'Mar 13, 2021', 'Jan 11, 2022', 'Dec 31, 2021', 'Apr 17, 2020', 'Aug 17, 2021', 'May 21, 2021',
    'Mar 12, 2019', 'Oct 31, 2020', 'Sep 26, 2021', 'Dec 01, 2021', 'Aug 27, 2020', 'Jun 05, 2019'
  ]),
  endDate: sample([
    'Mar 03, 2023', 'Jan 01, 2022', 'Dec 31, 2022', 'Apr 07, 2024', 'Aug 17, 2022', 'May 01, 2023',
    'Mar 12, 2024', 'Oct 31, 2022', 'Sep 25, 2023', 'Dec 01, 2022'
  ]),
  type: sample([
    'Coupon/Promo Generated', 'Coupon/Promo List', 'Coupon/Promo Static', 'Entry a Contest',
    'Get on the List','Newsletter','Tout Only','Other Forms'
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'stop']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default users;
