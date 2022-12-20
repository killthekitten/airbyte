import { Form, Formik, useField } from "formik";
import merge from "lodash/merge";
import { useState } from "react";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "components/ui/Button";
import { Modal, ModalBody, ModalFooter } from "components/ui/Modal";

import { FormikPatch } from "core/form/FormikPatch";

import { ReactComponent as PlusIcon } from "../../connection/ConnectionOnboarding/plusIcon.svg";
import { BuilderStream, DEFAULT_BUILDER_STREAM_VALUES } from "../types";
import styles from "./AddStreamButton.module.scss";
import { BuilderField } from "./BuilderField";

interface AddStreamValues {
  streamName: string;
  urlPath: string;
}

interface AddStreamButtonProps {
  onAddStream: (addedStreamNum: number) => void;
  button?: React.ReactElement;
  initialValues?: Partial<BuilderStream>;
}

export const AddStreamButton: React.FC<AddStreamButtonProps> = ({ onAddStream, button, initialValues }) => {
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const [streamsField, , helpers] = useField<BuilderStream[]>("streams");
  const numStreams = streamsField.value.length;

  const buttonClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      {button ? (
        React.cloneElement(button, {
          onClick: buttonClickHandler,
        })
      ) : (
        <Button className={styles.addButton} onClick={buttonClickHandler} icon={<PlusIcon />} />
      )}
      {isOpen && (
        <Formik
          initialValues={{ streamName: "", urlPath: "" }}
          onSubmit={(values: AddStreamValues) => {
            helpers.setValue([
              ...streamsField.value,
              merge({}, DEFAULT_BUILDER_STREAM_VALUES, {
                name: values.streamName,
                urlPath: values.urlPath,
              }),
            ]);
            setIsOpen(false);
            onAddStream(numStreams);
          }}
        >
          <>
            <FormikPatch />
            <Modal
              size="sm"
              title={<FormattedMessage id="connectorBuilder.addStreamModal.title" />}
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <Form>
                <ModalBody className={styles.body}>
                  <BuilderField
                    path="streamName"
                    type="string"
                    label={formatMessage({ id: "connectorBuilder.addStreamModal.streamNameLabel" })}
                    tooltip={formatMessage({ id: "connectorBuilder.addStreamModal.streamNameTooltip" })}
                  />
                  <BuilderField
                    path="urlPath"
                    type="string"
                    label={formatMessage({ id: "connectorBuilder.addStreamModal.urlPathLabel" })}
                    tooltip={formatMessage({ id: "connectorBuilder.addStreamModal.urlPathTooltip" })}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="secondary"
                    type="reset"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <FormattedMessage id="form.cancel" />
                  </Button>
                  <Button type="submit">
                    <FormattedMessage id="form.create" />
                  </Button>
                </ModalFooter>
              </Form>
            </Modal>
          </>
        </Formik>
      )}
    </>
  );
};
