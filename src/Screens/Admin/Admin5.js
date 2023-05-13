import React, { useState } from "react";
import { Select, Space } from "antd";
import { Input } from "antd";
import { Button } from "antd";

export default function Admin5() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [index, setIndex] = useState("");

  const { Option } = Select;
  const { TextArea } = Input;
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


  return (
    <form className="d-flex flex-column w-33 align-items-center m-auto mt-6">
      <>
        <h2 className="mb-3">Add Sector</h2>
        <div className="w-100 mb-3">
          <Input
            value={name}
            placeholder="Add name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-100 mb-3">
          <TextArea
            rows={4}
            className="w-100 mb-3"
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={image}
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={index}
            placeholder="Relative Index"
            onChange={(e) => setIndex(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Select
            mode="multiple"
            className="w-100 mb-3"
            placeholder="SEO Tags"
            defaultValue={["test2"]}
            onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="test" label="test">
              <Space>
                <span role="img" aria-label="USA">
                  test
                </span>
              </Space>
            </Option>
          </Select>
        </div>
        <Button className="w-100" type="primary">
          Add
        </Button>
      </>
    </form>
  );
}
