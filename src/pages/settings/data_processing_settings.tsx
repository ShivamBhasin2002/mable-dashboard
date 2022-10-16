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

  const dataprocessingSettings = useSelector((state) => state.dataProcessing);
  //for getting save status of the setting field --- working of save button
  const [isSaved, setisSaved] = useState({
    key: '',
    status: ''
  });

  const [UpdateSetting, setUpdateSetting] = useState({
    settingKey: '',
    settingValue: ''
  });

  //updating the changes made by user and saving it to the server
  useEffect(() => {
    dispatch(
      updateDataProcessSettings({
        settings: [UpdateSetting]
      })
    );
  }, [UpdateSetting]);

  useEffect(() => {
    setisSaved({
      key: UpdateSetting.settingKey,
      status: dataprocessingSettings.status
    });
  }, [dataprocessingSettings]);

  function getname(settingkey: string) {
    return settingkey.replaceAll('_', ' ');
  }
  return (
    <div className="text-light">
      {dataprocessingSettings.settings.length === 0 ? (
        <Loading />
      ) : (
        dataprocessingSettings.settings.map((data: any) => {
          return (
            <>
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
