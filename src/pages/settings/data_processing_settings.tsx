import { useState, useEffect } from 'react';
import Inputboolcomp from 'components/settings/Inputboolcomp';
import { useSelector, useDispatch } from 'redux/store';
import { Loading } from 'components/common';
import { updateDataProcessSettings } from 'redux/reducers/dataProcessingSlice';
import { makeBool } from 'utility/functions/helper';
export default function DataProcessingSettings() {
  const dispatch = useDispatch();
  const dataprocessingSettings = useSelector((state) => state.dataProcessing);
  //for getting save status of the setting field --- working of save button
  const [isSaved, setisSaved] = useState<{
    key?: string;
    status?: string;
  }>({
    key: ' ',
    status: ' '
  });

  const [UpdateSetting, setUpdateSetting] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: ' ',
    settingValue: ' '
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

  return (
    <div className="text-light">
      {dataprocessingSettings.settings.length === 0 ? (
        <Loading />
      ) : (
        dataprocessingSettings.settings.map(
          (data: { setting_key: string; setting_value: string }) => {
            return (
              <>
                <Inputboolcomp
                  key={data.setting_key}
                  name={data.setting_key}
                  setState={setUpdateSetting}
                  value={makeBool(data.setting_value)}
                  dataSaved={isSaved}
                  setDataSaved={setisSaved}
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
