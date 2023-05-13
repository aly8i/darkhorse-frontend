import React, { useState } from "react";
import { Select, Space } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import { DatePicker } from "antd";

export default function Admin2() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [BSE, setBSE] = useState("");
  const [code, setCode] = useState("");
  const [DFCode, setDFCode] = useState("");
  const [price, setPrice] = useState("");
  const [gain, setGain] = useState("");
  const [gainPerc, setGainPerc] = useState("");
  const [PE, setPE] = useState("");
  const [priceSuggested, setPriceSuggested] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState("");
  const [SEODescription, setSEODescription] = useState("");
  const [index, setIndex] = useState("");

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

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <form className="d-flex flex-column w-33 align-items-center m-auto mt-6">
      <>
        <h2 className="mb-3">Add Company</h2>
        <div className="w-100 mb-3">
          <Input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-100 mb-3">
          <Input
            value={BSE}
            placeholder="BSE"
            onChange={(e) => setBSE(e.target.value)}
          />
        </div>
        <div className="w-100 mb-3">
          <DatePicker className="w-100" onChange={onChangeDate} />
        </div>
        <div className="w-100 mb-3">
          <Input
            value={code}
            placeholder="Code"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <TextArea
            rows={4}
            className=""
            placeholder="D-F-code"
            value={DFCode}
            onChange={(e) => setDFCode(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={gain}
            placeholder="Gain"
            onChange={(e) => setGain(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={gainPerc}
            placeholder="Gain_Perc"
            onChange={(e) => setGainPerc(e.target.value)}
          />
        </div>
        <div className="w-100 mb-3">
          <Input
            value={priceSuggested}
            placeholder="Price Suggested"
            onChange={(e) => setPriceSuggested(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <Input
            value={PE}
            placeholder="PE"
            onChange={(e) => setPE(e.target.value)}
          />
        </div>
        <div className="w-100 mb-3">
          <Input
            value={heading}
            placeholder="Heading"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        <div className="w-100 mb-3">
          <TextArea
            rows={4}
            className=""
            placeholder="SEO Description"
            value={SEODescription}
            onChange={(e) => setSEODescription(e.target.value)}
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
          <Input
            value={image}
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>


        <div className="w-100 mb-3">
          <Select
            showSearch
            className="w-100 mb-3"
            placeholder="Paid"
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
        <TextArea
          rows={4}
          className="w-100 mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      
      <div className="w-100 mb-3">
          <Select
            showSearch
            className="w-100 mb-3"
            placeholder="Select Sector"
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
          showSearch
          className="w-100 mb-3"
          placeholder="Select category"
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
          showSearch
          className="w-100 mb-3"
          placeholder="Add Tag"
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
          showSearch
          className="w-100 mb-3"
          placeholder="Add Blog Post"
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
        <Button className="w-100" type="primary">
          Add
        </Button>
      </>
    </form>
  );
}
