import { CalendarIcon, ChatBubbleOvalLeftIcon, FolderIcon } from '@heroicons/react/24/outline';
import Comment from 'app/gioi-thieu/components/Comment';
import CEOPost from './CEOPost';

const MainBlog = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary">
        Chương Trình Thu 2019 “Ai cũng có bánh ngon – Ai cũng có quà đẹp” (1-10/09/2019)
      </h1>
      <div className="mt-5 flex  gap-3 border-y py-4 text-sm capitalize ">
        <div className="flex gap-2">
          <CalendarIcon className="size-5 text-second" />
          <span>12/07/2020</span>
        </div>
        <div className="flex gap-2">
          <FolderIcon className="size-5 text-second" />
          <span>sự kiện trung thu</span>
        </div>
        <div className="flex gap-2">
          <ChatBubbleOvalLeftIcon className="size-5 text-second" />
          <span>bình luận</span>
        </div>
      </div>
      <div className="">
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est, qui harum culpa id ea
          hic praesentium debitis sunt ipsum obcaecati dolore dolorem porro, quibusdam ipsa libero
          vel commodi amet distinctio. Cum esse recusandae consequuntur nemo dolorum distinctio fuga
          sed assumenda ipsum cumque, ullam, eligendi impedit voluptas dolor. Maiores perferendis,
          unde adipisci rerum amet doloremque optio cum similique quasi natus dicta perspiciatis!
          Adipisci illo dolore dolorem vero eius, sed commodi consequuntur quod corporis quia
          inventore neque id quo, obcaecati maiores officiis veniam, alias ducimus nam asperiores
          nobis? Beatae, laborum libero minus provident ipsam fugiat maxime itaque ex quis. Labore,
          nam explicabo sapiente, saepe incidunt nihil voluptate eius accusantium deserunt vel ea
          quo sit excepturi doloribus voluptates cum maxime adipisci perspiciatis tenetur obcaecati
          quaerat, fugit quibusdam voluptatem. Veniam beatae, quaerat incidunt provident odio
          repudiandae, qui quia ducimus itaque perferendis enim consectetur molestiae, harum earum
          vitae vel nemo magni quas laboriosam commodi. Nostrum quis iste hic natus vel ad
          explicabo! Maiores laudantium, odit, dicta commodi odio dolorum deleniti doloremque
          mollitia cum officiis harum saepe, cupiditate sunt fugiat quae hic explicabo velit
          blanditiis libero? Ex ratione dicta, nihil consectetur, aut eligendi cum perspiciatis
          maiores ut asperiores perferendis labore nulla voluptate, repellat provident quasi nam
          debitis assumenda laboriosam corporis explicabo sapiente? Sunt, officia expedita quas fuga
          repudiandae quisquam vitae sequi et deleniti omnis atque excepturi quasi maxime corporis
          laboriosam iure perferendis! Nihil, nisi et quam adipisci consectetur saepe quod
          asperiores doloribus natus similique, ipsum quasi tempora cupiditate totam enim, sapiente
          quo impedit velit amet labore dolor voluptates consequatur exercitationem voluptas! Iste
          autem quam qui cupiditate quod, dicta pariatur magni sapiente odit vel expedita similique
          illo dolorum voluptatem. Culpa beatae nam magnam blanditiis laborum facilis magni
          aspernatur, laudantium quod quos rerum, a voluptas excepturi! Maxime quia earum fugiat!
          Cumque reiciendis iste natus maiores architecto at.
        </p>
      </div>
      <CEOPost />
      <Comment />
    </div>
  );
};

export default MainBlog;
