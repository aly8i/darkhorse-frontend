import React, { useState } from "react";
import { Select, Space } from "antd";
import { Input } from "antd";
import { Button } from 'antd';

export default function Admin1() {
  const [text, setText] = useState("");
  const [card, setCard] = useState("");

  const { Option } = Select;
  const { TextArea } = Input;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <form className="d-flex flex-column w-33 align-items-center m-auto mt-6">
      <>
      <h2 className="mb-3">Add Blog Parts</h2>
      <div className="w-100 mb-3">
        <Input
          value={text}
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="w-100 mb-3">
        <TextArea
          rows={4}
          className="w-100 mb-3"
          placeholder="Card"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
      </div>
      <div className="w-100 mb-3">
        <Select
          showSearch
          className="w-100 mb-3"
          placeholder="Select blog post"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={""}
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
      <Button className="w-100" type="primary">Add</Button>
</>
    </form>
  );
}
