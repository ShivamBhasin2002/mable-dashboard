import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import Inputboolcomp from 'components/settings/Inputboolcomp';
import { useSelector, useDispatch } from 'redux/store';
import axios from 'axios';
import { Loading } from 'components/common';
import { updateDataProcessSettings } from 'redux/reducers/dataProcessingSlice';
export default function DataProcessingSettings() {
  const toast = useToast();
  const dispatch = useDispatch();

  const dataprocessingSettings = useSelector((state) => state.dataProcessing.settings);
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

  const [UpdateSetting, setUpdateSetting] = useState({
    settingKey: '',
    settingValue: ''
  });

  //updating the changes made by user and saving it to the server
  useEffect(() => {
    console.log(UpdateSetting.settingKey);
    console.log(UpdateSetting.settingValue);
    const settingdata = new Object({
      settingKey: UpdateSetting.settingKey,
      settingValue: String(UpdateSetting.settingValue)
    });
    console.log(settingdata);
    dispatch(
      updateDataProcessSettings({
        settings: [UpdateSetting]
      })
    );
  }, [UpdateSetting]);

  //for updating the local state for changes made by user ---- using for- user dont need to fetch the big object array everytime it changes
  // function updateCurrData(name: string, updatedData: boolean) {
  //   const Arr = [...Storesettings];
  //   Storesettings.filter((elm, idx) => {
  //     if (name === elm.name) {
  //       Arr[idx].value = updatedData;
  //       setStoresettings(Arr);
  //     }
  //   });
  // }

  return (
    <div className="text-light">
      {dataprocessingSettings.length === 0 ? (
        <Loading />
      ) : (
        dataprocessingSettings.map((data: any) => {
          return (
            <>
              <p>{data.setting_value}</p>
              <Inputboolcomp
                key={data.setting_key}
                title={data.setting_key}
                name={data.setting_key}
                setState={setUpdateSetting}
                value={data.setting_value === 'true' ? true : false}
                dataSaved={isSaved}
                setdataSaved={setisSaved}
              />
              <div className="divider bg-gray w-100 h-[.01em]" />
            </>
          );
        })
      )}
    </div>
  );
}
