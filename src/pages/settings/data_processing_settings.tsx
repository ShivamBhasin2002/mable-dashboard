import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import Inputboolcomp from 'components/settings/Inputboolcomp';
import { useSelector } from 'redux/store';
import axios from 'axios';
import { Loading } from 'components/common';
import { fetchDataProcessSettings } from 'redux/reducers/dataProcessingSlice';
export default function DataProcessingSettings() {
  const toast = useToast();

  fetchDataProcessSettings({});

  const dataprocessingSettings = useSelector((state) => state.dataProcessing.settings);
  console.log('settings');
  console.log(dataprocessingSettings);
  //for getting save status of the setting field --- working of save button
  const [isSaved, setisSaved] = useState({
    userTrackingConcent: true,
    anonymizeIp: true,
    usersFirstName: true,
    usersLastName: true,
    usersPhoneNo: true,
    usersAddress: true,
    usersPostalCode: true
  });

  //API url for server req
  const SAVE_API_Url = 'http://localhost:5000/v1/setstoresettings';
  const [Storesettings, setStoresettings] = useState<any[]>([]);
  const [UpdateSetting, setUpdateSetting] = useState({
    name: '',
    value: false
  });

  //updating the changes made by user and saving it to the server
  useEffect(() => {
    axios
      .post(SAVE_API_Url, UpdateSetting)
      .then((updatedData) => {
        setisSaved({ ...isSaved, [UpdateSetting.name]: true });
        updateCurrData(UpdateSetting.name, updatedData.data.value);
        toast({
          title: 'Setting Saved Successfully',
          status: 'success',
          isClosable: true,
          position: 'bottom-right'
        });
      })
      .catch(() => {
        updateCurrData(UpdateSetting.name, UpdateSetting.value);
        toast({
          title: 'Try Again',
          status: 'error',
          isClosable: true,
          position: 'bottom-right'
        });
      });
  }, [UpdateSetting]);

  //for updating the local state for changes made by user ---- using for- user dont need to fetch the big object array everytime it changes
  function updateCurrData(name: string, updatedData: boolean) {
    const Arr = [...Storesettings];
    Storesettings.filter((elm, idx) => {
      if (name === elm.name) {
        Arr[idx].value = updatedData;
        setStoresettings(Arr);
      }
    });
  }

  return (
    <div className="text-light">
      {dataprocessingSettings.length === 0 ? (
        <Loading />
      ) : (
        dataprocessingSettings.map(
          (data: { source_id: number; setting_key: string; setting_value: string }) => {
            console.log('hi');
            return (
              <>
                <Inputboolcomp
                  key={data.setting_key}
                  title={data.setting_key}
                  name={data.setting_key}
                  setState={setUpdateSetting}
                  value={Boolean(data.setting_value)}
                  dataSaved={isSaved}
                  setdataSaved={setisSaved}
                />
                <div className="divider bg-gray w-100 h-[.01em]" />
              </>
            );
          }
        )
      )}
    </div>
  );
}
