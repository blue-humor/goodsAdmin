import React from 'react';

import { Editor } from '@tinymce/tinymce-react';

// import { reqFileImage } from '@/services/common';

interface IndexProps {
  setDetails?: any;
  initialValuesDoc?: string;
}

const Index: React.FC<IndexProps> = ({ setDetails, initialValuesDoc }) => {
  const demoBaseConfig = {
    selector: 'textarea#premiumskinsandicons-material-outline',
    skin: 'oxide-dark',
    // skin: 'material-outline',
    content_css: 'material-outline',
    icons: 'material',
    language: 'zh_CN',
    draggable_modal: true,
    automatic_uploads: false,
    height: 600,
    resize: true,
    paste_data_images: true,
    statusbar: true, // 底部的状态栏
    menubar: true, // 最上方的菜单
    branding: false, // 水印“Powered by TinyMCE”
    convert_urls: false, //去除URL转换
    plugins: [
      'a11ychecker',
      'advcode',
      'advlist',
      'anchor',
      'autolink',
      'codesample',
      'fullscreen',
      'image',
      'editimage',
      'tinydrive',
      'lists',
      'link',
      'media',
      'powerpaste',
      'preview',
      'searchreplace',
      'table',
      'tinymcespellchecker',
      'visualblocks',
      'wordcount',
    ],

    toolbar:
      'undo redo | bold italic | forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
    // spellchecker_dialog: true,
    // spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
    content_style: '* { padding:0; margin:0; } img {max-width:100% !important }',
    // content_style: 'img {max-width:100px;max-height:200px;vertical-align:top}',
    images_upload_handler: async (
      blob: any,
      success: (arg0: any) => void,
      failure: (arg0: string) => void,
    ) => {
      let data = new FormData();
      data.append('file', blob.blob());
      //   const res = await reqFileImage(data);
      //   if (res.code === 200) {
      //     console.log(res.data);
      //     success(res.data);
      //   } else {
      //     failure('上传失败');
      //   }
      // console.log(res);
    },
  };

  const handleEditorChange = (content: any, editor: any) => {
    setDetails(content);
  };

  return (
    <>
      <Editor
        inline={false}
        selector="editorStateRef"
        apiKey="0o49p2ph3ipz43ha3hh5vpbwsuln3gaz5bfef296z7tk7xtv"
        initialValue={initialValuesDoc}
        init={demoBaseConfig}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default Index;
