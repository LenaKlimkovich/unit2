import fetchData from '../http';
import {getLevel} from '../getLevel'


jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('response:ok', () => {
  fetchData.mockReturnValue({status:'ok', level: 13});
  const result = getLevel(1);
expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
expect(result).toBe(`Ваш текущий уровень: 13`)
});
 

test('error', () => {
  fetchData.mockReturnValue({status:'error'});
  const result = getLevel(2);
expect(fetchData).toHaveBeenCalledWith('https://server/user/2');
expect(result).toBe(`Информация об уровне временно недоступна`)
});

 